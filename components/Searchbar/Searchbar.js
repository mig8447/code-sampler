import { Navbar, FormControl, InputGroup, Container, Dropdown } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';
import Style from '../../styles/Searchbar.module.css';
import { searchIndex } from '../../search/search-index';
import SelectBadges from '../UI/SelectBadges/SelectBadges';
import ResultsDropDown from './ResultsDropDown/ResultsDropDown';
import { tagsIndex } from '../../search/tags-index';
import { useRouter } from 'next/router';
import { useFuse } from '../useFuse/useFuse';

const SearchBarComponent = () => {

    const router = useRouter()

    const [active, setActive] = useState(false);
    const [filterActive, setFilterActive] = useState(false);
    const ref = useRef(null);
    const { results,onSearch,query, filtersSelected,filters,onSelectFilter } = useFuse(searchIndex, {
            includeScore: true,
            keys: ['title', 'description', 'tags', 'id'],
            matchAllOnEmptyQuery: false,
        });


    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        document.addEventListener("keydown", handleHideDropdown, true);
        return () => {
            document.removeEventListener("keydown", handleHideDropdown, true);
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    const handleHideDropdown = (event) => {
        if (event.key === "Escape") {
            setActive(false);
        }
    };

    const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
            setActive(false);
        }
    };

    const onEnterClick = (event) => {
        if (event.key === 'Enter' && query) {
            console.log(filtersSelected)
            router.push({
                pathname: '/results',
                query: { keyword: query, filters:filtersSelected },
            })
        }
    }

    return (
        <Navbar className={Style.searchBarColor} >
            <Container fluid="md" className={"d-flex justify-content-center"} >

                <InputGroup
                    ref={ref}
                    onClick={() => setActive(true)}
                    onKeyDown={onEnterClick}
                    className={["w-50", "pt-2 pb-2", Style.searchBar].join(" ")}>
                    <FormControl
                        className={["border-0", "shadow-none", ((query || filters.length > 0) && results.length) ? Style.borderRadius : ""].join(" ")}
                        placeholder="How to.."
                        aria-label="Search"
                        type="text"
                        value={query}
                        onChange={onSearch}
                    />

                    <InputGroup.Append>
                        <InputGroup.Text className={["bg-white border-0 rounded-right", ((query || filters.length > 0) && results.length) ? Style.borderRadius : ""].join(" ")}>
                            <span className="fa fa-search fa-sm" aria-hidden="true"></span>
                        </InputGroup.Text>
                    </InputGroup.Append>
                    {/*Custom Drop down for displaying search results*/}
                    <ResultsDropDown results={results} query={query} active={active} />

                </InputGroup>
                {/*React Drop down for displaying tags*/}
                <Dropdown
                    onToggle={(isClose) => isClose ? setFilterActive(true) : setFilterActive(false)}
                    show={filterActive}
                >
                    <Dropdown.Toggle style={{ backgroundColor: "transparent", boxShadow: "none" }} className={"border-0"}>
                        <span className="fa fa-filter fa-lg text-light" aria-hidden="true"></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className={[Style.filterDropDown, "scroll"].join(" ")}>
                        {Object.keys(tagsIndex).map(tag => (
                            <Dropdown.Item key={tag} className={"bg-white"} onSelect={() => (setFilterActive(true))} >
                                <SelectBadges label={tag} onClickHandler={onSelectFilter} selected={filters[tag]} />
                            </Dropdown.Item>
                        ))}

                    </Dropdown.Menu>
                </Dropdown>

            </Container>

        </Navbar>
    )
}

export default SearchBarComponent;