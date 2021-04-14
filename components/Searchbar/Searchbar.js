import { Navbar, Form, FormControl, Button, InputGroup, Row, Col, Container } from 'react-bootstrap';
import Style from '../../styles/Searchbar.module.css';

const SearchBarComponent = ({ query, setQuery }) => {

    const basePath = process.env.NEXT_BASE_PATH || "";

    return (
            <Navbar className={Style.searchBarColor} >
                <Container className={"d-flex justify-content-center"} >
                    <InputGroup className={"w-50 p-2 " +  Style.searchBar }>
                        <FormControl
                            className={"border-0"}
                            placeholder="How to.."
                            aria-label="Search"
                            value={query}
                            onChange={setQuery}
                            />
                        <InputGroup.Append>
                            <InputGroup.Text className={"bg-white border-0"}>
                            <span className="fa fa-search fa-sm" aria-hidden="true"></span>
                            </InputGroup.Text>
                        </InputGroup.Append>

                    </InputGroup>
                    <span className="fa fa-filter fa-lg text-light" aria-hidden="true"></span>
                </Container>

            </Navbar>
    )
}

export default SearchBarComponent;