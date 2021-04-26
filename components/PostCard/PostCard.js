import Link from "next/link";
import { Card, Row, Col } from "react-bootstrap";
import Tags from "../UI/Tags";
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";


const PostCard = ({ title, description, tags, filename, favorite, onClickFavorite }) => {

    const icon = favorite  ? "fa fa-bookmark fa-sm fa-2x text-warning" : "fa fa-bookmark-o fa-sm fa-2x"
    const action = favorite ? "delete" : "add";

    return (

        <Card style={{ backgroundColor: "#dae2ef", flexBasis: "30%" }} >
            <Card.Body>
                <Card.Title className={"text-capitalize"}>
                    <Row>
                        <Col>
                            <Link href={`/${filename}`}>
                                {title}
                            </Link>
                        </Col>
                        <Col className={["d-flex", "justify-content-end"].join(" ")}>
                            <button onClick={() => onClickFavorite(action, filename, {title, description, tags})} style={{backgroundColor:"transparent"}} className="border-0" >
                                <span className={icon} aria-hidden="true"></span>
                            </button>
                            
                        </Col>
                    </Row>
                </Card.Title>
                <Tags tags={tags} />
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

PostCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    filename: PropTypes.string.isRequired,
    
};

export default PostCard;


