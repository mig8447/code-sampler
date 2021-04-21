import Navbar from '../components/Navbar/Navbar';
import Searchbar from '../components/Searchbar/Searchbar';
import { Row, Container, Card, Badge, Col, ListGroup, Button, Pagination } from 'react-bootstrap';
import Style from '../styles/results.module.css';
import { useRouter } from 'next/router';
import ItemResult from '../components/ItemResult/ItemResult';
import lunr from 'lunr';
import searchIndex from '../search/search-index';

const Results = () => {

    const router = useRouter()
    const query = router.query.keyword + "";
    console.log(query);

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
                                <h5>{query ? '"' + query + '"' : null}</h5>

                                <Badge className={"position-absolute"} variant="light" style={{ right: '0', top: '25%' }}>Count</Badge>
                            </Card.Header>

                            <ListGroup variant="flush">

                                <ItemResult 
                                    title="Using SQL over REST"
                                    tags={["JS", "Node"]}
                                    description={"Communicate with the database using REST from a variety of programming languages"}
                                    version="2.12.12"
                                    favorite={false}
                                />

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