import { Navbar, Form, FormControl, Button, InputGroup, Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import Style from '../../styles/Searchbar.module.css';

const SearchBarComponent = () => {

    const [query, setQuery] = useState("");

    const onChangeQuery = (event) => {
        setQuery(event.target.value)
    }

    return (
        <Navbar className={Style.searchBarColor} >
            <Container fluid="md" className={"d-flex justify-content-center"} >
                
                <InputGroup className={["w-50", "p-2", Style.searchBar].join(" ")}>
                    <FormControl
                        className={["border-0", query ? Style.borderRadius: ""].join(" ")}
                        placeholder="How to.."
                        aria-label="Search"
                        type="text"
                        value={query}
                        onChange={onChangeQuery}
                    />
                        
                    <InputGroup.Append>
                        <InputGroup.Text className={"bg-white border-0"}>
                            <span className="fa fa-search fa-sm" aria-hidden="true"></span>
                        </InputGroup.Text>
                    </InputGroup.Append>

                    <div style={{
                        display: query ? 'block' : 'none',
                        borderBottomLeftRadius: "0.25rem",
                        borderBottomRightRadius: "0.25rem"
                    }}
                        className={["bg-white", Style.dropDown].join(" ")}>
                        <ul>
                            <li>
                                test
                            </li>
                        </ul>
                    </div>

                </InputGroup>
                <span className="fa fa-filter fa-lg text-light" aria-hidden="true"></span>
            </Container>

        </Navbar>
    )
}

export default SearchBarComponent;