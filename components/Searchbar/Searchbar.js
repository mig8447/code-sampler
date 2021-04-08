import { Navbar, Form, FormControl, Button, InputGroup, Row, Col, Container } from 'react-bootstrap';
import Style from '../../styles/Searchbar.module.css';
import Image from 'next/image';
const SearchBarComponent = () => {

    return (
        <div className={" "}>

            <Navbar className={Style.searchBarColor} >
                <Container className={"d-flex justify-content-center"}>
                            <InputGroup className={"w-50 p-2"}>
                                <FormControl
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="basic-addon2" />
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">
                                        <Image src="/loupeIcon.png" alt="settings" width={15} height={15} />
                                    </InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                </Container>
            </Navbar>
        </div>
    )
}

export default SearchBarComponent;