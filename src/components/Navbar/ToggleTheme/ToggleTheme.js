import { Button } from 'react-bootstrap';
import classes from '../../../styles/ToggleButton.module.css';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark, a11yLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const ToggleTheme = ({ }) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    const highlighterStyle = {
        borderRadius: "5px",
        border: "1px solid #dee2e6",
    };
    const styleDark = (theme === "a11yDark") ? classes.themeSelected : "";
    const styleLight = (!theme || theme === "a11yLight") ? classes.themeSelected : "";
    const onClickHandler = (themeSelected) => {
        if (themeSelected === "a11yDark") {
            setTheme("a11yDark");
            localStorage.setItem("theme", "a11yDark");
            
        } else if (themeSelected === "a11yLight") {
            setTheme("a11yLight");
            localStorage.setItem("theme", "a11yLight");
            
        }
    }

    

    return (
        <div>
            <div className={"my-3"}>
                {/* <span className="mr-2">Light mode</span> */}
                <Button aria-label="Light Mode" variant="" className={[styleLight, classes.btnOutlined, classes.lightModeButton].join(" ")} onClick={() => onClickHandler("a11yLight")}>
                    <span className="fa fa-sun-o align-baseline" aria-hidden="true"></span>
                </Button>
                <Button aria-label="Dark Mode" variant="" className={[styleDark, classes.btnOutlined, classes.darkModeButton].join(" ")} onClick={() => onClickHandler("a11yDark")}>
                    <span className="fa fa-moon-o align-baseline" aria-hidden="true"></span>
                </Button>
                {/* <span className="ml-2">Dark mode</span> */}
            </div>

            <SyntaxHighlighter language={"Javascript"} style={theme === "a11yDark" ? a11yDark : a11yLight} customStyle={highlighterStyle} showLineNumbers={false}>
                {"// CODE EXAMPLE\nconst object = { a: 1, b: 2, c: 3 };\nfor (const property in object) {\n    console.log(`${property}: ${object[property]}`);\n}"}
            </SyntaxHighlighter>

            
        </div>
    )
};

export default ToggleTheme;