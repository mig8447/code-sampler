import { Button } from 'react-bootstrap';
import classes from '../../../styles/ToggleButton.module.css';
import { useState } from 'react';

const ToggleTheme = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const styleDark = (theme === "dark") ? classes.themeSelected : "";
    const styleLight = (theme === undefined || theme === "light") ? classes.themeSelected : "";
    console.log(theme);
    const onClickHandler = (themeSelected) =>{
        if(themeSelected === "dark"){
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }else if(themeSelected === "light"){
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    }

    return(
    <div>
        <span className="mr-2">Light mode</span>
        <Button variant="" className={["rounded-0", styleLight].join(" ")} onClick={() => onClickHandler("light")}>
            <span className="fa fa-sun-o" aria-hidden="true"></span>
                        
        </Button>
        <Button variant="" className={["rounded-0", styleDark].join(" ")} onClick={() => onClickHandler("dark")}>
            <span className="fa fa-moon-o" aria-hidden="true"></span>
        </Button>
        <span className="ml-2">Dark mode</span>
    </div>
    )
};

export default ToggleTheme;