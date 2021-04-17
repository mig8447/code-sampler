import { Navbar, Form, FormControl, Button, InputGroup, Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import Link from 'next/link';
import Style from '../../styles/Searchbar.module.css';
import { searchIndex } from '../../search/search-index';
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
    const [results, setResults] = useState([]);
    const [active, setActive] = useState(false);

    const searchAction = () => {

        if (query.length) {
            const resultsRef = idx.search(query);
            console.log(resultsRef);

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



    const onChangeQuery = (event) => {
        setQuery(event.target.value)
        searchAction()
    }

    return (
        <Navbar className={Style.searchBarColor} >
            <Container fluid="md" className={"d-flex justify-content-center"} >

                <InputGroup className={["w-50", "p-2", Style.searchBar].join(" ")}>
                    <FormControl
                        className={["border-0", "shadow-none", (query && results.length) ? Style.borderRadius : ""].join(" ")}
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

                    <div className={["bg-white", Style.dropDown, query && results.length && active ? Style.dropDownActive : "" ].join(" ")}>
                        <ul>
                            {results.map(result =>
                                <li key={result.id} className="mb-3 mr-3">
                                    <strong className={"text-capitalize"}><Link href={`/${result.id}`} >{result.title}</Link></strong>
                                    <p className="mb-0">{result.description}</p>
                                </li>)}
                        </ul>
                    </div>

                </InputGroup>
                <span className="fa fa-filter fa-lg text-light" aria-hidden="true"></span>
            </Container>

        </Navbar>
    )
}

export default SearchBarComponent;