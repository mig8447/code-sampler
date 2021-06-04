import Document, { Html, Head, NextScript, Main }  from 'next/document';

/**
 * Document class
 */
export default class myDocument extends Document {
    render(){
        return (
            <Html lang="en">
                <Head></Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    };
};