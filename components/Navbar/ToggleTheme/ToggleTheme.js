import { Button } from 'react-bootstrap';
import classes from '../../../styles/ToggleButton.module.css';
import { useState } from 'react';

const ToggleTheme = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const styleDark = (theme === "a11yDark") ? classes.themeSelected : "";
    const styleLight = (theme === undefined || theme === "a11yLight") ? classes.themeSelected : "";
    console.log(theme);
    const onClickHandler = (themeSelected) =>{
        if(themeSelected === "a11yDark"){
            setTheme("a11yDark");
            localStorage.setItem("theme", "a11yDark");
        }else if(themeSelected === "a11yLight"){
            setTheme("a11yLight");
            localStorage.setItem("theme", "a11yLight");
        }
    }

    return(
    <div>
        <span className="mr-2">Light mode</span>
        <Button variant="" className={["rounded-0", styleLight].join(" ")} onClick={() => onClickHandler("a11yLight")}>
            <span className="fa fa-sun-o" aria-hidden="true"></span>
                        
        </Button>
        <Button variant="" className={["rounded-0", styleDark].join(" ")} onClick={() => onClickHandler("a11yDark")}>
            <span className="fa fa-moon-o" aria-hidden="true"></span>
        </Button>
        <span className="ml-2">Dark mode</span>
    </div>
    )
};

export default ToggleTheme;