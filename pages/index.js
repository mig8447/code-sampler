import Tabs from '../components/Tabs';
import Tab from '../components/Tab';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark, a11yLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useState } from 'react';

const Index = () => {

    const [selected, setSelected] = useState("javascript");
    const [theme, setTheme] = useState(a11yDark);

    const javascriptCode = `var rows = prompt("How many rows for your multiplication table?");
    var cols = prompt("How many columns for your multiplication table?");
    if(rows == "" || rows == null)
            rows = 10;
    if(cols== "" || cols== null)
            cols = 10;
    createTable(rows, cols);
    function createTable(rows, cols)
    {
        var j=1;
        var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
        for(i=1;i<=rows;i++)
        {
        output = output + "<tr>";
        while(j<=cols)
        {
            output = output + "<td>" + i*j + "</td>";
            j = j+1;
        }
            output = output + "</tr>";
            j = 1;
    }
    output = output + "</table>";
    document.write(output);
    }`

    const pythonCode = `# Python Program to convert temperature in celsius to fahrenheit

    # change this value for a different result
    celsius = 37.5
    
    # calculate fahrenheit
    fahrenheit = (celsius * 1.8) + 32
    print('%0.1f degree Celsius is equal to %0.1f degree Fahrenheit' %(celsius,fahrenheit))`;

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
            <h1>Hello world</h1>
            <button onClick={toogleTheme}>Change </button>
            <Tabs tabs={["javascript", "python"]} selected={selected} setSelected={setSelected} >

                <Tab isSelected={selected === "javascript"}>
                    <button onClick={()=>navigator.clipboard.writeText(javascriptCode)}>Copy to clipboard</button>
                    <SyntaxHighlighter language="javascript" style={theme} customStyle={highlighterStyle} showLineNumbers={true}>
                        {javascriptCode}
                    </SyntaxHighlighter>
                </Tab>
                <Tab isSelected={selected === "python"}>
                <button onClick={()=>navigator.clipboard.writeText(pythonCode)}>Copy to clipboard</button>
                    <SyntaxHighlighter language="python" style={theme} customStyle={highlighterStyle} showLineNumbers={true}>
                        {pythonCode}
                    </SyntaxHighlighter>
                </Tab>
            </Tabs>

        </>
    )
}

export default Index;