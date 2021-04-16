import { Card, Badge, Row, Col } from "react-bootstrap";
import classes from "../../styles/TopCategoryCard.module.css";

const TopCategoryCard = () => (
    <Card style={{flexBasis:"30%"}} className={[classes.topCategoryCard, "text-light", "mt-3"].join(" ")}>
        <Card.Body>
            <Card.Title className=" border-bottom pb-4" >
                <Row>
                    <Col>
                        Card Title 
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Badge variant="light">count</Badge>
                    </Col>
                </Row>
                </Card.Title>
                <div className="d-flex flex-column">
                    <p className="border-bottom pb-3">Title 1</p>
                    <p className="border-bottom pb-3">Title 1</p>
                    <p className="border-bottom pb-3">Title 1</p>
                    <p className="border-bottom pb-3">Title 1</p>
                </div>
            
            </Card.Body>
    </Card>
)


export default TopCategoryCard;