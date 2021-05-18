import { Navbar, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import Link from "next/link";
import Style from '../../styles/Navbar.module.css';
import GenerateModal from '../UI/GenerateModal/GenerateModal';
import SelectBadges from '../UI/SelectBadges/SelectBadges';
import LanguageFilter from './LanguageFilter/LanguageFilter';
import { languageIndex } from '../../search/language-index';
import ToggleButton from './ToggleTheme/ToggleTheme';
import { useFuse } from '../useFuse/useFuse';


const NavbarComponent = () => {
    const [show, setShow] = useState(false);
    const [preferredLanguages, setPreferredLanguages] = useState(process.browser ? JSON.parse(localStorage.getItem("preferredLanguages")) : {});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { results, onSearch, query } = useFuse(languageIndex, {
        includeScore: true,
        keys: ["id", "name"],
        matchAllOnEmptyQuery: true,
    });

    const deleteKeyFromObject = (key) => {
        const { [key]: tmp, ...rest } = preferredLanguages;
        setPreferredLanguages(rest);
        localStorage.setItem("preferredLanguages", JSON.stringify(rest));
    }

    const onClickBadge = (selected, language) => {

        if (selected) {
            deleteKeyFromObject(language);
        } else {
            let newPreferredLanguages = { ...preferredLanguages }
            newPreferredLanguages[language] = true;
            setPreferredLanguages(newPreferredLanguages)
            localStorage.setItem("preferredLanguages", JSON.stringify(newPreferredLanguages));
        }
    }



    return (
        <div aria-label="Code Sampler Navbar">
            <Navbar aria-label="Bar Menu" role="menubar" className={Style.navbarColor} >
                
                <Navbar.Brand className={"text-white ml-3 btn"}  role="none">
                    <a role="button" aria-label="Code Sampler" tabIndex="0" aria-haspopup="false" href={"/"} >
                        <h6 className={"mb-1"}>Code Sampler</h6>
                    </a>
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end ">
                    <div className={Style.iconContainer}>
                        <a role="menuitem" aria-label="favorites" aria-haspopup="false" href={"/favorites"} >
                            <span className="fa fa-bookmark-o fa-lg" aria-hidden="true"></span>
                        </a>
                    </div>
                    <div className={Style.iconContainer}>
                        <button role="menuitem" aria-label="settings" aria-haspopup="false" onClick={handleShow} style={{ background: "none", border: "none" }} area-hidden="true" className=" fa fa-gear fa-lg text-light" ></button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
            <GenerateModal show={show} handleClose={handleClose} title={"Settings"} aria-label="Settings modal" aria-modal="true" role="dialog" >
                    <h6>Preferred languages</h6>
                <LanguageFilter query={query} setQuery={onSearch} />
                <Container fluid className={["mt-2", Style.selectLanguages, "scroll"].join(" ")}>
                    {results.map(lang => (
                        <SelectBadges key={lang.item.id}
                            label={lang.item.name}
                            selected={preferredLanguages && preferredLanguages[lang.item.id]}
                            onClickHandler={onClickBadge}
                        />
                    ))}
                </Container>
                <h6>Preferred Code Theme </h6>
                <Container fluid className="mt-2">
                    <ToggleButton />

                </Container>

            </GenerateModal>
        </div>
    )
}

export default NavbarComponent;