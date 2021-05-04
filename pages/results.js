import Navbar from '../components/Navbar/Navbar';
import Searchbar from '../components/Searchbar/Searchbar';
import { Row, Container, Card, Badge, Col, ListGroup, Button, Pagination } from 'react-bootstrap';
import Style from '../styles/results.module.css';
import { useRouter } from 'next/router';
import ItemResult from '../components/ItemResult/ItemResult';
import { searchIndex } from '../search/search-index';
import Fuse from 'fuse.js'
import { useState, useEffect } from 'react';

const options = {
    includeScore: true,
    keys: ['title', 'description', 'tags', 'id']
}

const Results = () => {
    const router = useRouter();
    const fuse = new Fuse(searchIndex, options);
    const [favorites, setFavorites] = useState({});
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const resultsPerPage = 3;
    const totalPages = Math.ceil(results.length / resultsPerPage);
    const pageHandler = (value) => {
        const page = currentPage + value;

        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
        }

    }

    useEffect(() => {
        const keyword = new URLSearchParams(window.location.search).get("keyword") || "";
        setQuery(keyword);
        setResults(resultsSet(keyword));
        const favs = JSON.parse(localStorage.getItem("favorites")) || {};
        setFavorites(favs);
    }, [router.query.keyword]);

    const resultsSet = (res) => {
        const searchResults = (fuse.search(res)).map(elem => elem.item)
        return searchResults;
    }

    const deleteKeyFromObject = (key) => {
        const { [key]: tmp, ...rest } = favorites
        setFavorites(rest);
        localStorage.setItem("favorites", JSON.stringify(rest));
    }

    const onClickFavorite = (action, filename, metaData) => {
        if (action === "delete") {
            deleteKeyFromObject(filename);
        } else if (action === "add") {
            let newFavorites = { ...favorites }
            newFavorites[filename] = {
                ...metaData
            };
            setFavorites(newFavorites)
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
        }
    }


    return (
        <>
            <Navbar />
            <Searchbar />
            <Container>
                <Row className={"d-flex justify-content-center p-4 text-white"}>
                    <Card style={{ width: '100%' }} className={[Style.bgCardColor].join(" ")}>
                        <Card.Body className={"ml-md-5 mr-md-5"}>
                            <Card.Header className={[Style.bgCardColor, Style.borderGrey].join(" ")}>
                                <h3>Results for:</h3>
                                <h5>{query ? `"${query}"` : ""}</h5>

                                <Badge className={"position-absolute"} variant="light" style={{ right: '0', top: '25%' }}>{`Found: ${results.length}`}</Badge>
                            </Card.Header>

                            <ListGroup variant="flush">
                                {
                                   results.length>0 ?
                                    results.slice(currentPage * resultsPerPage, (currentPage * resultsPerPage) + resultsPerPage).map(result => (
                                        <ItemResult
                                            title={result.title}
                                            tags={result.tags}
                                            description={result.description}
                                            favorite={favorites[result.id] ? true: false}
                                            version={"12.3.3"}
                                            key={result.id}
                                            filename={result.id}
                                            onClickFavorite={onClickFavorite}
                                        />
                                    ))
                                    :
                                    <p>Your search did not match any document</p>
                                }

                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className={"d-flex justify-content-center "}>
                    <Pagination >
                        <Pagination.Prev onClick={() => pageHandler(-1)} />
                        <Pagination.Item disabled>{currentPage + 1}</Pagination.Item>
                        <Pagination.Next onClick={() => pageHandler(1)} />
                    </Pagination>
                </Row>
            </Container>

        </>
    )
}





export default Results;