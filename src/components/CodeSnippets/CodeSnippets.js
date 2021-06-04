import { a11yDark, a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import {OverlayTrigger, Tooltip } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Clipboard from 'react-clipboard.js';
import PropTypes from 'prop-types';

import classes from '../../styles/CodeSnippets.module.css';
import Tabs from './Tabs';
import Tab from './Tab';

/**
 * Render Code Snippet component - Display the code highlighted with language tabs.
 * @param {Object} props 
 * @param {!Object} props.children - Contained children objects.
 * @param {!Array<string>} props.labels - List of language labels to display through tabs.
 * @param {!string} props.theme - Name of the actual theme of the code snippet.
 * @param {!Function} props.toggleTheme - Function that sets the theme of the code snippet.
 * @param {!string} props.selected - String of the actual language label selected.
 * @param {!Function} props.setSelected - Function that sets the actual language label.
 * @param {!Function} props.addAlert - Function to add an alert.
 */
const CodeSnippets = ({ children, labels, theme, toggleTheme, selected, setSelected, addAlert }) => {
/**
 * @constant {!Object} snippetData - Parse the contained to be mapped.
 */
    const snippetData = JSON.parse(children);
/**
 * Style formatted this because the component SyntaxHighlighter only accept the style this way as props.
 * @constant {!Object} highlighterStyle - Style properties for highlighter.
 */
    const highlighterStyle = {
        marginTop: "0",
        marginBottom: "0",
        border: "1px black solid",
        borderTop: "none",
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
        minHeight: "3.2rem"
    };
    return (
        <>
            <Tabs selected={ selected } setSelected={ setSelected } labels={ labels } >
                {
                    snippetData.items.map( ( code, i ) => {
                        return (
                            <Tab isSelected={ selected === code.label } key={ code.label }>
                                <div className={ [classes.iconGroup, "my-2", "mx-2"].join(" ") }>
                                    <button aria-label="toggle theme" tabIndex="0" className={ classes.iconButton } onClick={ toggleTheme }>
                                        <OverlayTrigger placement="bottom" overlay={ <Tooltip id={ `tooltip-bottom` }>Change code theme</Tooltip> }>
                                            <span className={ ["fa fa-sun-o fa-lg", theme === "a11yDark" ? "text-light" : "text-dark"].join(" ") } aria-hidden="true">
                                            </span>
                                        </OverlayTrigger>
                                    </button>

                                    <Clipboard className={ classes.iconButton } data-clipboard-text={ code.value } onClick={ () => { addAlert("Copied to clipboard") }}>
                                        <OverlayTrigger placement="bottom" overlay={ <Tooltip id={ `tooltip-copy` }>Copy example code</Tooltip> }>
                                            <div aria-label="copy to clipboard" tabIndex="0">
                                                <span className={ ["fa fa-copy fa-lg ", theme === "a11yDark" ? "text-light" : "text-dark"].join(" ") } aria-hidden="true">
                                                </span>
                                            </div>

                                        </OverlayTrigger>
                                    </Clipboard>
                                </div>
                                <SyntaxHighlighter language={ code.lang } style={ theme === "a11yDark" ? a11yDark : a11yLight } customStyle={ highlighterStyle } showLineNumbers={ true }>
                                    { code.value }
                                </SyntaxHighlighter>
                            </Tab>
                        );
                    })
                }
            </Tabs>
        </>
    );
};

CodeSnippets.propTypes = {
    children: PropTypes.any.isRequired,
    labels: PropTypes.arrayOf( PropTypes.string ).isRequired,
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    setSelected: PropTypes.func.isRequired,
    addAlert: PropTypes.func.isRequired,
};

export default CodeSnippets;