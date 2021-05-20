import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/font-apex.min.css'
import '../styles/styles.css';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Searchbar from '../components/Searchbar/Searchbar';
import Footer from '../components/Footer/Footer';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'unsafe-inline' 'self';" />
            </Head>
            <Navbar />
            <Searchbar />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}