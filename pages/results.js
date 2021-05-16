import { Row, Container, Card, Badge, ListGroup, Pagination } from 'react-bootstrap';
import Style from '../styles/results.module.css';
import ItemResult from '../components/ItemResult/ItemResult';
import { searchIndex } from '../search/search-index';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useFuse } from '../components/useFuse/useFuse';
import AlertNotification from "../components/UI/AlertNotification";
import Tags from '../components/UI/Tags';


const Results = () => {
    const router = useRouter();
    const [favorites, setFavorites] = useState(process.browser ? JSON.parse(localStorage.getItem("favorites")): {});
    const [currentPage, setCurrentPage] = useState(0);
    const { results, query, setQuery, setFilters, filtersSelected } = useFuse(searchIndex, {
        includeScore: true,
        keys: ['title', 'description', 'tags', 'id'],
        matchAllOnEmptyQuery: false,
    });
    const resultsPerPage = 3;
    const totalPages = Math.ceil(results.length / resultsPerPage);

    useEffect(() => {
        let [keyword, filtersToApply] = getURLParams();
        setQuery(keyword);
        setFilters(filtersToApply);

    },[router.query.keyword, router.query.filters])


    const pageHandler = (value) => {
        const page = currentPage + value;

        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
        }

    }
    const [alerts, setAlerts] = useState([]);

    const addAlert = (description) => {
        let tempAlerts = alerts;
        const newAlerts = [...tempAlerts, description];
        setAlerts(newAlerts);
    }

    function getURLParams(){
        let keyword = router.query.keyword;
        let filters = router.query.filters;
        if(typeof(filters) === "string"){
            filters = {[filters]: true}
        }
        else if(typeof(filters) === "object"){
            filters=filters.reduce((obj,filter)=> (obj[filter]=true,obj),{});
        }else{
            filters = {};
        }
        return [keyword,filters];
    }

    const deleteKeyFromObject = (key) => {
        const { [key]: tmp, ...rest } = favorites;
        setFavorites(rest);
        localStorage.setItem("favorites", JSON.stringify(rest));
    }

    const onClickFavorite = (action, filename, metaData) => {
        if (action === "delete") {
            deleteKeyFromObject(filename);
            addAlert("Bookmark removed succesfully!");
        } else if (action === "add") {
            let newFavorites = { ...favorites }
            newFavorites[filename] = {
                ...metaData
            };
            setFavorites(newFavorites)
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
            addAlert("Bookmark added succesfully!");
        }
    }


    return (
        <>
            <Container>
                <Row className={"d-flex justify-content-center p-4 text-white"}>
                    <Card style={{ width: '100%' }} className={[Style.bgCardColor].join(" ")}>
                        <Card.Body className={"ml-md-5 mr-md-5"}>
                            <Card.Header className={[Style.bgCardColor, Style.borderGrey].join(" ")}>
                                <h3>Results for:</h3>
                                <h5>{query ? `"${query}"` : ""}</h5>
                                {<Tags tags={filtersSelected} />}
                                <Badge className={"position-absolute"} variant="light" style={{ right: '0', top: '25%' }}>{`Found: ${results.length}`}</Badge>
                            </Card.Header>

                            <ListGroup variant="flush">
                                {
                                   results.length>0 ?
                                    results.slice(currentPage * resultsPerPage, (currentPage * resultsPerPage) + resultsPerPage).map(result => (
                                        <ItemResult
                                            title={result.item.title}
                                            tags={result.item.tags}
                                            description={result.item.description}
                                            favorite={favorites && favorites[result.item.id] ? true: false}
                                            version={"12.3.3"}
                                            key={result.item.id}
                                            filename={result.item.id}
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
                {totalPages > 1 ? <Row className={"d-flex justify-content-center "}>
                    <Pagination >
                        <Pagination.Prev onClick={() => pageHandler(-1)} />
                        <Pagination.Item disabled>{currentPage + 1}</Pagination.Item>
                        <Pagination.Next onClick={() => pageHandler(1)} />
                    </Pagination>
                </Row> : ""}
            </Container>

            <div style={{ "position": "fixed", "top": "2%", "right": "2%" }}>
                {alerts ? alerts.map((desc, key) => <AlertNotification key={key} description={desc} />) : ""}
            </div>
        </>
    )
}





export default Results;