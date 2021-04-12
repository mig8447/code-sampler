import Link from "next/link";
import { Card, Row, Col } from "react-bootstrap";
import classes from '../../../styles/RecentContentCard.module.css';

const RecentContentCard = ({ title, description, tags, filename }) => {


    return (
        <Link href={`/${filename}`}>
            <Card style={{ backgroundColor: "#dae2ef", flexBasis: "30%", cursor:"pointer" }} >
                <Card.Body>
                    <Card.Title className={"text-capitalize"}>
                        <Row>
                            <Col>
                                {title}
                            </Col>
                            <Col className={["d-flex", "justify-content-end"].join(" ")}>
                                <span className="fa fa-bookmark-o fa-sm fa-2x" aria-hidden="true"></span>
                            </Col>
                        </Row>
                    </Card.Title>
                    <div className={["d-flex", "flex-row", "flex-wrap", classes.tags].join(" ")} >
                        {tags.map(tag => (
                            <p className={["text-capitalize", classes.tag].join(" ")} key={tag}>{tag}</p>
                        )
                        )}
                    </div>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default RecentContentCard;