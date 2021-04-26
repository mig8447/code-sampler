import Tabs from '../components/Tabs';
import Tab from '../components/Tab';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Clipboard from 'react-clipboard.js';

const CodeSnippets = (props) => {

    const snippetData = JSON.parse(props.children);
    const labels = props.labels;
    const theme = props.theme;
    const toggleTheme = props.toggleTheme;
    const selected = props.selected;
    const setSelected = props.setSelected;
    const highlighterStyle = {
        marginTop: "0",
        border: "1px black solid",
        borderTop: "none",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px"
    };


    return (
        <>
        <button onClick={toggleTheme}>Change </button>
            <Tabs selected={selected} setSelected={setSelected} labels={labels} >
                {
                    snippetData.items.map((code, i) => {
                        
                        return (
                            
                                <Tab isSelected={selected === code.label} key={code.label}>
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