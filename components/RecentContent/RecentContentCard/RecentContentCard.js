import Link from "next/link";
import { Card, Row, Col } from "react-bootstrap";
import Tags from "../../UI/Tags";
import PropTypes from 'prop-types';

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
                    <Tags tags={tags}/>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

RecentContentCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    filename: PropTypes.string.isRequired
};

export default RecentContentCard;


