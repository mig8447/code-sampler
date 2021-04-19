import { Navbar, Form, FormControl, InputGroup, Container, Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import Link from 'next/link';
import Style from '../../styles/Searchbar.module.css';
import { searchIndex } from '../../search/search-index';
import SelectBadges from '../UI/SelectBadges/SelectBadges';
import lunr from 'lunr';

const idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('tags')
    this.field('description')

    searchIndex.forEach(function (doc) {
        this.add(doc);
    }, this);
});

const SearchBarComponent = () => {

    const [query, setQuery] = useState("");
    const [filters, setFilters] = useState({});
    const [results, setResults] = useState([]);
    const [active, setActive] = useState(false);

    let filtersSelected = Object.keys(filters).map(filter => `+tags:${filter}`).join(" ");

    const searchAction = (query, filtersArr) => {

        if (query.length || filtersArr.length > 0) {
            const resultsRef = idx.search(`+*${query}*` + " " + filtersArr);
            
            let results = searchIndex.map((post) => {
                let isIn = false;
                resultsRef.forEach(function (result) {
                    console.log(result.ref + " " + post.id);
                    if (result.ref == post.id) {
                        isIn = true;
                    }
                })
                if (isIn) {
                    return post;
                }
                return "";
            })
            results = results.filter(function (el) {
                return el != "";
            });
            setResults(results);
        } else {
            setResults([]);
        }
    }



    const onSelectFilter = (selected, label) => {
        if (selected) {
            let { [label]:remove, ...newFilter } = filters;

            setFilters(newFilter);
            filtersSelected = Object.keys(newFilter).map(filter => `+tags:${filter}`).join(" ")
        }
        else{
            let newFilter = {
                ...filters,
                [label]: true
            };
            setFilters(newFilter);
            filtersSelected =  Object.keys(newFilter).map(filter => `+tags:${filter}`).join(" ");
        }

        searchAction(query, filtersSelected);
        
    }

    const onChangeQuery = (event) => {
        setQuery(event.target.value);
        searchAction(event.target.value, filtersSelected);
    }

    return (
        <Navbar className={Style.searchBarColor} >
            <Container fluid="md" className={"d-flex justify-content-center"} >

                <InputGroup className={["w-50", "p-2", Style.searchBar].join(" ")}>
                    <FormControl
                        className={["border-0", "shadow-none", ((query || filters.length > 0) && results.length) ? Style.borderRadius : ""].join(" ")}
                        placeholder="How to.."
                        aria-label="Search"
                        type="text"
                        value={query}
                        onChange={onChangeQuery}
                        onBlur={() => setActive(false)}
                        onFocus={() => setActive(true)}
                    />

                    <InputGroup.Append>
                        <InputGroup.Text className={"bg-white border-0"}>
                            <span className="fa fa-search fa-sm" aria-hidden="true"></span>
                        </InputGroup.Text>
                    </InputGroup.Append>

                    <div className={["bg-white", Style.resultsDropDown, Style.ScrollDropDown, query && results.length && active ? Style.resultsDropDownActive : ""].join(" ")}>
                        <ul>
                            {results.map(result =>
                                <li key={result.id} className="mb-3 mr-3">
                                    <strong className={"text-capitalize"}><Link href={`/${result.id}`} >{result.title}</Link></strong>
                                    <p className="mb-0">{result.description}</p>
                                </li>)}
                        </ul>
                    </div>

                </InputGroup>
                <Dropdown
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)}
                >
                    <Dropdown.Toggle style={{ backgroundColor: "transparent", boxShadow: "none" }} className={"border-0"}>
                        <span className="fa fa-filter fa-lg text-light" aria-hidden="true"></span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={[Style.filterDropDown, Style.ScrollDropDown].join(" ")}>
                        <Dropdown.Item className={"bg-white"}>
                            <SelectBadges label="Python" onClickHandler={onSelectFilter} selected={filters["Python"]} />
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </Container>

        </Navbar>
    )
}

export default SearchBarComponent;