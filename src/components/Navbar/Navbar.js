import { Navbar, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import Link from 'next/link';

import GenerateModal from '../UI/GenerateModal/GenerateModal';
import SelectBadges from '../UI/SelectBadges/SelectBadges';
import LanguageFilter from './LanguageFilter/LanguageFilter';
import { languageIndex } from '../../search/language-index';
import ToggleButton from './ToggleTheme/ToggleTheme';
import Style from '../../styles/Navbar.module.css';
import { useFuse } from '../useFuse/useFuse';

/**
 * Render the NavbarComponent rendered.
 */
const NavbarComponent = () => {
/**
 * @constant show - State to show wether the modal is active or false.
 */
    const [ show, setShow ] = useState( false );
/**
 * @constant preferredLanguages - Obtained favorite language from local storage and save it to the current state.
 */
    const [ preferredLanguages, setPreferredLanguages ] = useState( process.browser ? JSON.parse( localStorage.getItem( "preferredLanguages" ) ) : {} );
/**
 * Set modal to close.
 * @typedef {Function} handleClose
 */
    const handleClose = () => setShow( false );
/**
 * Set modal to open.
 * @typedef {Function} handleShow
 */
    const handleShow = () => setShow( true );

    const { results, onSearch, query } = useFuse( languageIndex, {
        includeScore: true,
        keys: [ "id", "name" ],
        matchAllOnEmptyQuery: true,
    });
/**
 * Delete the preferred language by key.
 * @typedef {Function} deleteKeyFromObject
 * @param {!string} key
 */
    const deleteKeyFromObject = ( key ) => {
        const { [ key ]: tmp, ...rest } = preferredLanguages;
        setPreferredLanguages( rest );
        localStorage.setItem( "preferredLanguages", JSON.stringify( rest ) );
    }
/**
 * Delete the preferred language by key.
 * @typedef {Function} onClickBadge
 * @param {!boolean} selected - Indicator if is currently selected.
 * @param {!string} language - language by string
 */
    const onClickBadge = ( selected, language ) => {
        if ( selected ) {
            deleteKeyFromObject( language );
        } else {
            let newPreferredLanguages = { ...preferredLanguages }
            newPreferredLanguages[ language ] = true;
            setPreferredLanguages( newPreferredLanguages )
            localStorage.setItem( "preferredLanguages", JSON.stringify( newPreferredLanguages ) );
        };
    };

    return (
        <div aria-label="Code Sampler Navbar">
            <Navbar aria-label="Bar Menu" role="menubar" className={ Style.navbarColor } >
                <Navbar.Brand className={ "text-white btn" }  role="none">
                    <a role="menuitem" aria-label="Code Sampler" tabIndex="0" aria-haspopup="false" >
                        <Link href={ "/" }>
                            <h6 className={ "mb-1" }>Code Sampler</h6>
                        </Link>
                    </a>
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <div className={ Style.iconContainer }>
                            <Link href={ "/favorites" }>
                                <a role="menuitem" aria-label="favorites" aria-haspopup="false" >
                                    <span className="fa fa-bookmark-o fa-lg" aria-hidden="true"></span>
                                </a>
                            </Link>
                    </div>
                    <div className={ Style.iconContainer }>
                        <button role="menuitem" aria-label="settings" aria-haspopup="false" onClick={ handleShow } style={{ background: "none", border: "none" }} area-hidden="true" className=" fa fa-gear fa-lg text-light" ></button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
            <GenerateModal show={ show } handleClose={ handleClose } title={ "Settings" } aria-label="Settings modal" aria-modal="true" role="dialog" >
                    <h6>Preferred Languages</h6>
                <LanguageFilter query={ query } setQuery={ onSearch } />
                <Container fluid className={ [ "pb-3 mt-2", Style.selectLanguages, "scroll" ].join(" ") }>
                    { results.map( lang => (
                        <SelectBadges key={ lang.item.id }
                            label={ lang.item.name }
                            selected={ preferredLanguages && preferredLanguages[ lang.item.id ] }
                            onClickHandler={ onClickBadge }
                        />
                    )) }
                </Container>
                <h6>Preferred Code Theme </h6>
                <Container fluid className="mt-2">
                    <ToggleButton />
                </Container>
            </GenerateModal>
        </div>
    );
};

export default NavbarComponent;