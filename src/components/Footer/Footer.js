import { Navbar, Nav } from 'react-bootstrap';
import Style from '../../styles/Navbar.module.css';

const FooterComponent = () => {
    return (
    
        <Navbar className={Style.navbarColor} variant="dark" expand="lg">
            <Navbar.Brand
                className={"text-white ml-3"}
                href="https://github.com/mig8447/code-sampler"
            >
                CodeSampler Repo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Terms</Nav.Link>
                    <Nav.Link href="#link">Privacy</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default FooterComponent;