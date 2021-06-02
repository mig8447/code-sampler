import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/font-apex.min.css';
import Head from 'next/head';
import Searchbar from '../components/Searchbar/Searchbar';
import Navbar from '../components/Navbar/Navbar';
import '../styles/styles.css';


/**
 * Render the main page element which includes the navbar and body of every page of the site.
 * @param {!Object} props 
 * @param {!Object} props.Component
 * @param {Object} props.pageProps
 */
export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'unsafe-inline' 'self';" /> */}
            </Head>
            <Navbar />
            <Searchbar />
            <Component {...pageProps} />
        </>
    )
}