import Head from 'next/head';
import PostCard from '../components/PostCard/PostCard';
import { useState, useEffect } from 'react';
import ContentCards from '../components/ContentCards/ContentCards';
import AlertNotification from '../components/UI/AlertNotification';
import { Pagination, Container, Row, Toast } from 'react-bootstrap';

/**
 * Render the Favorites page - Display the examples stored on the local storage of the user.
 *  
 */
const favorites = () => {

    
/**
 *  Function for increasing or decreasing page within the limits, from 0 to totalPages-1
 *  @param {!number} value Variable to sum current page
 */
    const pageHandler = (value) => {
        const page = currentPage + value;
        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
        }
    }
/**
 *  Function for delete an element form favorites
 *  @param {!number} key - Variable key to 
 */
    const deleteKeyFromObject = (key) => {
        const { [key]: tmp, ...rest } = favorites
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
        if (action === "delete") {
            deleteKeyFromObject(filename);
            const len = Math.ceil((Object.keys(favorites).length) / cardsPerPage);
            setTotalPages(len - 1);
            (currentPage === len - 1) && pageHandler(-1);
            addAlert("Bookmark removed successfully!");

        } else if (action === "add") {
            let newFavorites = { ...favorites }
            newFavorites[filename] = {
                ...metaData
            };
            setFavorites(newFavorites)
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
            addAlert("Bookmark added successfully!");
        }
    }
    /**
     * @constant {!number} cardsPerPage - Number of cards or examples shown per page.
     */
        const cardsPerPage = 3;

/**
 * @constant {object} favorites - Current favorite posts information saved on your local storage.
 */
        const [favorites, setFavorites] = useState({});
/**
 * 
 * @constant {!number} totalPages - Number of total pages that can exists.
 */
        const [totalPages, setTotalPages] = useState(1);
/**
 * @constant {!number} currentPage -Number of page you are currently on
 */
        const [currentPage, setCurrentPage] = useState(0);


    useEffect(() => {
/**
 * @constant {{title : string, 
 * description : string,
 * tags:Array<string>} | {}} favoritesLocal - Object json with favorite posts info saved on your local storage
 */
        const favoritesLocal = JSON.parse(localStorage.getItem("favorites")) || {};
        setFavorites(favoritesLocal);
        setTotalPages(Math.ceil((Object.keys(favoritesLocal).length) / cardsPerPage));
    }, [])

    return (
        <>
            <Head>
                <title>Favorites</title>
            </Head>

            <h4 className={"mt-3"}>Bookmarks</h4>

            <Container fluid>

                <ContentCards>

                    {Object.keys(favorites).length>0 ? Object.keys(favorites).slice(currentPage * cardsPerPage, (currentPage * cardsPerPage) + cardsPerPage).map(filename => (
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



                {totalPages ? <Row className={"d-flex justify-content-center "}>
                    <Pagination >
                        {currentPage === 0
                            ? <Pagination.Prev disabled onClick={() => pageHandler(-1)} />
                            : <Pagination.Prev onClick={() => pageHandler(-1)} />
                        }
                        
                        <Pagination.Item disabled>{currentPage + 1}</Pagination.Item>
                        
                        {totalPages === (currentPage + 1)
                            ? <Pagination.Next disabled onClick={() => pageHandler(1)} />
                            : <Pagination.Next onClick={() => pageHandler(1)} />
                        }
                    </Pagination>
                </Row> : ""}

               
                    

               


            </Container>
            
            <div style={{ "position": "fixed", "top": "4rem", "right": "2rem" }}>
                {alerts ? alerts.map((desc, key) => <AlertNotification key={key} description={desc} />) : ""}
            </div>

        </>
    )
}

export default favorites;