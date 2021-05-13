import Navbar from '../components/Navbar/Navbar';
import Searchbar from '../components/Searchbar/Searchbar';
import Head from 'next/head';
import PostCard from '../components/PostCard/PostCard';
import { useState, useEffect } from 'react';
import ContentCards from '../components/ContentCards/ContentCards';
import AlertNotification from '../components/UI/AlertNotification';
import { Pagination, Container, Row, Toast } from 'react-bootstrap';
const favorites = ({ }) => {

    

    const pageHandler = (value) => {
        const page = currentPage + value;

        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
        }

    }
    const deleteKeyFromObject = (key) => {
        const { [key]: tmp, ...rest } = favorites
        console.log(rest)
        setFavorites(rest);
        localStorage.setItem("favorites", JSON.stringify(rest));
    }
    
    const [alerts, setAlerts] = useState([]);

    const addAlert = (description) => {
        let tempAlerts = alerts;
        const newAlerts = [...tempAlerts, description];
        setAlerts(newAlerts);
    }

    const onClickFavorite = (action, filename, metaData) => {
        console.log("actions", action)
        if (action === "delete") {
            deleteKeyFromObject(filename);
            const len = Math.ceil((Object.keys(favorites).length) / cardsPerPage);
            setTotalPages(len - 1);
            (currentPage === len - 1) && pageHandler(-1);
            addAlert("Bookmark removed succesfully!");

        } else if (action === "add") {
            let newFavorites = { ...favorites }
            newFavorites[filename] = {
                ...metaData
            };
            //console.log(newFavorites)
            setFavorites(newFavorites)
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
            addAlert("Bookmark added succesfully!");
        }
    }


    const cardsPerPage = 2;

    const [favorites, setFavorites] = useState({});
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(0);
    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favorites")) || {};
        setFavorites(favs);
        setTotalPages(Math.ceil((Object.keys(favs).length) / cardsPerPage));
    }, [])

    return (
        <>
            <Head>
                <title>Favorites</title>
            </Head>

            <Navbar />
            <Searchbar />
            <h4 className={"mt-3"}>Bookmarks</h4>

            <Container fluid>

                <ContentCards>

                    {favorites.length ? Object.keys(favorites).slice(currentPage * cardsPerPage, (currentPage * cardsPerPage) + cardsPerPage).map(filename => (
                        <PostCard
                            key={filename}
                            filename={filename}
                            title={favorites[filename].title}
                            description={favorites[filename].description}
                            tags={favorites[filename].tags}
                            onClickFavorite={onClickFavorite}
                            favorite={favorites && favorites[filename]}
                        />

                    )) : <p className="text-white">You don't have any bookmarks yet  :'(</p>}
                </ContentCards>



                {totalPages && totalPages > 1 ? <Row className={"d-flex justify-content-center "}>
                    <Pagination >
                        <Pagination.Prev onClick={() => pageHandler(-1)} />
                        <Pagination.Item disabled>{currentPage + 1}</Pagination.Item>
                        <Pagination.Next onClick={() => pageHandler(1)} />
                    </Pagination>
                </Row> : ""}

               
                    

               


            </Container>
            
            <div style={{ "position": "fixed", "bottom": "2%", "left": "2%" }}>
                {alerts ? alerts.map((desc, key) => <AlertNotification key={key} description={desc} />) : ""}
            </div>

        </>
    )
}

export default favorites;