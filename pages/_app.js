import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/font-apex.min.css'
import '../styles/styles.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'unsafe-inline' 'self';" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}