import { Navbar, FormControl, InputGroup, Container, Dropdown } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

import { searchIndex } from '../../search/search-index';
import SelectBadges from '../UI/SelectBadges/SelectBadges';
import ResultsDropDown from './ResultsDropDown/ResultsDropDown';
import { tagsIndex } from '../../search/tags-index';
import Style from '../../styles/Searchbar.module.css';
import { useFuse } from '../useFuse/useFuse';

/**
 * Render the SearchBarComponent 
 */
const SearchBarComponent = () => {
    const router = useRouter();
/**
 * @constant active - State to indicate if the  component is active or not.
 */
    const [ active, setActive ] = useState( false );
/**
 * @constant filterActive - State to indicate if the  component filter is active or not.
 */
    const [ filterActive, setFilterActive ] = useState( false );
    const ref = useRef( null );
    const { results,onSearch,query, filtersSelected, filters, onSelectFilter, setQuery } = useFuse( searchIndex, 
        {
            includeScore: true,
            keys: [ 'title', 'description', 'tags', 'id' ],
            matchAllOnEmptyQuery: false,
        });

    useEffect( () => {
/**
 * We use a set of listeners to achieve a listener for an outside event so can be hidden the results dropdown.
 */
        document.addEventListener( "click", handleClickOutside, true );
        document.addEventListener( "keydown", handleHideDropdown, true );
        return () => {
            document.removeEventListener( "keydown", handleHideDropdown, true );
            document.removeEventListener( "click", handleClickOutside, true );
        };
    }, [] );
/**
 * Event listener for hide the dropdown.
 * @typedef {Function} handleHideDropdown
 * @param {Event} event - the event is called from the click outside listener.
 */
    const handleHideDropdown = event => {
        if ( event.key === "Escape" ) {
            setActive( false );
        };
    };
/**
 * Event listener for when click outside.
 * @typedef {Function} handleClickOutside
 * @param {Event} event - the event is called from the click outside listener.
 */
    const handleClickOutside = event => {
        if ( ref.current && !ref.current.contains( event.target ) ) {
            setActive( false );
        };
    };
/**
 * Event listener for when click inside
 * @typedef {Function} onEnterClick
 * @param {Event} event - the event is called from the click outside listener.
 */
    const onEnterClick = event => {
        if ( event.key === 'Enter' && query ) {
            pushSearchHandler();
        };
    };
/**
 * Send a push to the router to make a search with the query.
 * @typedef {Function} clickSearchHandler
 */
    const clickSearchHandler = () => {
        if ( query ) {
            pushSearchHandler();
        };
    };
/**
 * Send a push to the router to make a search with the query with the correct parameters.
 * @typedef {Function} pushSearchHandler
 */
    const pushSearchHandler = () => {
        setActive( false );
        ref.current.childNodes[0].blur();
        router.push({
            pathname: '/results',
            query: { keyword: query, filters:filtersSelected },
        });
    };

    return (
        <Navbar className={ Style.searchBarColor } >
            <Container fluid="md" className={ "d-flex justify-content-center" } >
                <InputGroup
                    ref={ ref }
                    onFocus={ () => setActive( true ) }
                    onKeyDown={ (e) => { setActive( true );onEnterClick( e ) } }
                    className={ [ "w-50", "pt-2 pb-2", "mr-2", Style.searchBar ].join(" ") }>
                    <FormControl
                        className={ [ "border-0", "shadow-none", (( query || filters.length > 0 ) && results.length ) ? Style.borderRadius : "" ].join(" ") }
                        placeholder="How to.."
                        aria-label="Search"
                        type="text"
                        value={ query }
                        onChange={ onSearch }
                        role="textbox"
                    />

                    <InputGroup.Append>
                        <InputGroup.Text aria-label="Search action" role="button" tabIndex="0"  className={ ["bg-white border-0 rounded-right", ((query || filters.length > 0) && results.length) ? Style.borderRadius : "" ].join(" ") }>
                            <span className="fa fa-search fa-sm" onClick={ clickSearchHandler } style={{ "cursor":"pointer" }}></span>
                        </InputGroup.Text>
                    </InputGroup.Append>
                    {/*Custom Drop down for displaying search results*/}
                    <ResultsDropDown results={ results } query={ query } setActive={ setActive } active={ active } />

                </InputGroup>
                {/*React Drop down for displaying tags*/}
                <Dropdown  
                    onToggle={ (isClose) => isClose ? setFilterActive(true) : setFilterActive(false) }
                    show={ filterActive } id="testhello"
                >
                    <Dropdown.Toggle style={{ backgroundColor: "transparent", boxShadow: "none" }} className={ "border-0 px-1" } aria-label="filter-button">
                        {
                        filtersSelected && filtersSelected.length > 0
                            ? <span className="fa fa-filter fa-lg fam-blank fam-is-success" aria-hidden="true"></span>
                            : <span className="fa fa-filter fa-lg text-light" aria-hidden="true"></span>
                        }
                    </Dropdown.Toggle>
                    <Dropdown.Menu align={{ lg: "left" }} className={ [Style.filterDropDown, "scroll"].join(" ") }>
                        {Object.keys( tagsIndex ).map(tag => (
                            <Dropdown.Item role="menuitem" key={ tag } className={ "bg-white" } onSelect={() => (setFilterActive(true))} onClick={() => onSelectFilter(filters[tag], tag)}>
                                <SelectBadges label={tag} onClickHandler={onSelectFilter} selected={filters[tag]} />
                            </Dropdown.Item>
                            
                        ))}

                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    );
};

export default SearchBarComponent;