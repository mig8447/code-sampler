import { Navbar, Nav } from 'react-bootstrap';
import Style from '../../styles/Navbar.module.css';
import GitHubButton from 'react-github-btn';
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
<GitHubButton href="https://github.com/mig8447/code-sampler" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star mig8447/code-sampler on GitHub">Star</GitHubButton>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default FooterComponent;