import { Navbar } from 'react-bootstrap';
import Style from '../../styles/Navbar.module.css';

const NavbarComponent = () => {
    const basePath = process.env.NEXT_BASE_PATH || "";

    return (

        <Navbar className={Style.navbarColor}>
            <Navbar.Brand className={"text-white ml-3"}><h6 className={"mb-1"}>Database Guide</h6></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end ">
                <div className={Style.iconContainer}>
                    <img src={`${basePath}/bookmarkIcon.png`} alt="bookmark" width={20} height={20} />
                </div>
                <div className={Style.iconContainer}>
                    <img src={`${basePath}/settingsIcon.png`} alt="settings" width={20} height={20} />
                </div>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavbarComponent;