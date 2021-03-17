import Tabs from '../components/Tabs';
import Tab from '../components/Tab';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark, a11yLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useState } from 'react';
import Clipboard from 'react-clipboard.js';

const CodeSnippets = (props) => {
    const snippetData = JSON.parse(props.children);
    const labels = snippetData.items.map(code => {
        return code.lang+code.meta;
    });
    const [selected, setSelected] = useState(labels[0]);
    const [theme, setTheme] = useState(a11yDark);

    const highlighterStyle = {
        marginTop: "0",
        border: "1px black solid",
        borderTop: "none",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px"
    };

    const toogleTheme = () => {
        theme === a11yDark ? setTheme(a11yLight) : setTheme(a11yDark);
    }


    return (
        <>
        <button onClick={toogleTheme}>Change </button>
            <Tabs selected={selected} setSelected={setSelected} labels={labels} >
                {
                    snippetData.items.map(code => {
                        const label = code.lang+code.meta
                        return (
                            
                                <Tab isSelected={selected === label} language={label} key={label}>
                                    <Clipboard data-clipboard-text={code.value}>Copy to clipboard</Clipboard>
                                    <SyntaxHighlighter language={code.lang} style={theme} customStyle={highlighterStyle} showLineNumbers={true}>
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