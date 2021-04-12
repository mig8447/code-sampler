import { Navbar, Form, FormControl, Button, InputGroup, Row, Col, Container } from 'react-bootstrap';
import Style from '../../styles/Searchbar.module.css';

const SearchBarComponent = () => {

    const basePath = process.env.NEXT_BASE_PATH || "";

    return (
            <Navbar className={Style.searchBarColor} >
                <Container className={"d-flex justify-content-center"} >
                    <InputGroup className={"w-50 p-2 " +  Style.searchBar }>
                        <FormControl
                            className={"border-0"}
                            placeholder="How to.."
                            aria-label="Search"
                            aria-describedby="basic-addon2" />
                        <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2" className={"bg-white border-0"}>
                                <img src={`${basePath}/loupeIcon.png`} alt="loupe" width={20} height={20} />
                            </InputGroup.Text>
                        </InputGroup.Append>

                    </InputGroup>
                    <img src={`${basePath}/filterIcon.png`} alt="filter" width={20} height={20} />
                </Container>

            </Navbar>
    )
}

export default SearchBarComponent;