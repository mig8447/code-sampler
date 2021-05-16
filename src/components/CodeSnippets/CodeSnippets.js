import Tabs from './Tabs';
import Tab from './Tab';
import SyntaxHighlighter from 'react-syntax-highlighter';
import classes from '../../styles/CodeSnippets.module.css';
import Clipboard from 'react-clipboard.js';
import { a11yDark, a11yLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {OverlayTrigger, Tooltip } from 'react-bootstrap';

const CodeSnippets = (props) => {

    const snippetData = JSON.parse(props.children);
    const labels = props.labels;
    const theme = props.theme;
    const toggleTheme = props.toggleTheme;
    const selected = props.selected;
    const setSelected = props.setSelected;
    const addAlert = props.addAlert;
    const highlighterStyle = {
        marginTop: "0",
        border: "1px black solid",
        borderTop: "none",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px"
    };


    return (
        <>

            <Tabs selected={selected} setSelected={setSelected} labels={labels} >
                {
                    snippetData.items.map((code, i) => {

                        return (

                            <Tab isSelected={selected === code.label} key={code.label}>
                                <div className={classes.iconGroup}>
                                    <button className={classes.iconButton} onClick={toggleTheme}>
                                        <OverlayTrigger placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Change code theme</Tooltip>}>
                                            <span className={["fa fa-sun-o fa-lg ", theme === "a11yDark" ? "text-light" : "text-dark"].join(" ")} aria-hidden="true">
                                            </span>
                                        </OverlayTrigger>
                                    </button>

                                    <Clipboard className={classes.iconButton} data-clipboard-text={code.value} onClick={() => {addAlert("Copied to clipboard")}}>
                                        <OverlayTrigger placement="bottom" overlay={<Tooltip id={`tooltip-copy`}>Copy example code</Tooltip>}>
                                            <span className={["fa fa-copy fa-lg ", theme === "a11yDark" ? "text-light" : "text-dark"].join(" ")} aria-hidden="true">
                                            </span>
                                        </OverlayTrigger>
                                    </Clipboard>

                                </div>
                                <SyntaxHighlighter language={code.lang} style={theme === "a11yDark" ? a11yDark : a11yLight} customStyle={highlighterStyle} showLineNumbers={true}>
                                    {code.value}
                                </SyntaxHighlighter>
                            </Tab>

                        );
                    })
                }

            </Tabs>
        </>
    )
}

export default CodeSnippets;