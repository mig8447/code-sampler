import { a11yDark, a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

import classes from '../../../styles/ToggleButton.module.css';

/**
 * Render ToggleTheme component. 
 */
const ToggleTheme = () => {
/**
 * @constant theme - State for theme preference settings initialized and saved from local storage.
 */
    const [theme, setTheme] = useState( localStorage.getItem( "theme" ) );
/**
 * @constant highlighterStyle - Css style for the syntax highlighter component, style only accepted this way by the library.
 */
    const highlighterStyle = {
        borderRadius: "5px",
        border: "1px solid #dee2e6",
    };
/**
 * @constant styleDark - According to the dark theme is defined for the SyntaxHighlighter can read it.
 */
    const styleDark = ( theme === "a11yDark" ) ? classes.themeSelected : "";

/**
 * @constant styleLight - According to the light theme is defined for the SyntaxHighlighter can read it. 
 */
    const styleLight = ( !theme || theme === "a11yLight" ) ? classes.themeSelected : "";

/**
 * By any change of the theme the preference theme stored in the local storage is changed.
 * @typedef {Function} onClickHandler
 * @param {!String} themeSelected - New theme to save
 */
    const onClickHandler = themeSelected => {
        if ( themeSelected === "a11yDark" ) {
            setTheme( "a11yDark" );
            localStorage.setItem( "theme", "a11yDark" );
            
        } else if ( themeSelected === "a11yLight" ) {
            setTheme( "a11yLight" );
            localStorage.setItem( "theme", "a11yLight" );
        }
    };

    return (
        <div>
            <div className={ "my-3" }>
                <Button aria-label="Light Mode" variant="" className={[ styleLight, classes.btnOutlined, classes.lightModeButton ].join(" ")} onClick={ () => onClickHandler( "a11yLight" ) }>
                    <span className="fa fa-sun-o align-baseline" aria-hidden="true"></span>
                </Button>
                <Button aria-label="Dark Mode" variant="" className={[ styleDark, classes.btnOutlined, classes.darkModeButton ].join(" ")} onClick={ () => onClickHandler( "a11yDark" ) }>
                    <span className="fa fa-moon-o align-baseline" aria-hidden="true"></span>
                </Button>
            </div>

            <SyntaxHighlighter language={ "Javascript" } style={ theme === "a11yDark" ? a11yDark : a11yLight } customStyle={ highlighterStyle } showLineNumbers={ false }>
{/**
 * String to be parsed as code by the SyntaxHighlighter
 */}
                {"// CODE EXAMPLE\nconst object = { a: 1, b: 2, c: 3 };\nfor (const property in object) {\n    console.log(`${property}: ${object[property]}`);\n}"}
            </SyntaxHighlighter>
        </div>
    );
};

export default ToggleTheme;