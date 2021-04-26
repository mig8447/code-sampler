import Navbar from '../components/Navbar/Navbar';
import Searchbar from '../components/Searchbar/Searchbar';
import { Row, Container, Card, Badge, Col, ListGroup, Button, Pagination } from 'react-bootstrap';
import Style from '../styles/results.module.css';
import { useRouter } from 'next/router';
import ItemResult from '../components/ItemResult/ItemResult';
import { searchIndex } from '../search/search-index';
import Fuse from 'fuse.js'
import { useState, useEffect } from 'react';
import ContentCards from '../components/ContentCards/ContentCards';

const options = {
    includeScore: true,
    keys: ['title', 'description', 'tags', 'id']
}

const Results = () => {
    const router = useRouter()
    const fuse = new Fuse(searchIndex, options)
    let [results, setResults] = useState([]);
    let [query, setQuery] = useState("");
    
    


    useEffect(() => {
        const keyword = new URLSearchParams(window.location.search).get("keyword");
        setQuery(keyword);
        setResults(resultsSet(keyword));
        

    }, [router.query.keyword]);

    const resultsSet = (res) => {
        console.log("dentro del useEffect");
        const searchResults = (fuse.search(res)).map(elem => elem.item)
        console.log(searchResults);
        return searchResults;
    }





    return (
        <>
            <Navbar />
            <Searchbar  />
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
                                    results.map(result => (
                                        <ItemResult
                                            title={result.title}    
                                            tags={result.tags}  
                                            description={result.description}  
                                            favorite={true}  
                                            version={"12.3.3"}
                                            key={result.id}
                                        />
                                    ))
                                }

                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className={"d-flex justify-content-center "}>
                    <Pagination >
                        <Pagination.Prev />
                        <Pagination.Item disabled>{1}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </Row>
            </Container>

        </>
    )
}





export default Results;