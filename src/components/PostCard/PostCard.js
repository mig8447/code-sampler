import { Card, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Tags from '../UI/Tags';

/**
 * Render the fromPostCard component
 * @param {Object} props
 * @param {!string} props.title - Title of the post
 * @param {!string} props.description - Description of the post
 */
const PostCard = ({ title, description, tags, filename, favorite, onClickFavorite }) => {
/**
 * @constant {!string} icon - The icon defined for the library if favorite.
 */
    const icon = favorite  ? "fa fa-bookmark fa-sm fa-2x" : "fa fa-bookmark-o fa-sm fa-2x";
/**
 * @constant {!string} action - The action is defined according if is favorite.
 */
    const action = favorite ? "delete" : "add";
/**
 * @constant {!string} isFavorite - For the aria-label we defined a proper message to describe if favorite or not.
 */
    const isFavorite = favorite ? "favorite bookmark selected" : "favorite bookmark";

    return (
        <Card style={{ backgroundColor: "#dae2ef", flexBasis: "30%" }} >
            <Card.Body>
                
                <Card.Title className={ "text-capitalize" }>
                    <Row>
                        <Col>
                            <Link href={ `/${ filename }` }>
                                { title }
                            </Link>
                        </Col>
                        <Col xs="auto" className={[ "d-flex", "justify-content-end" ].join(" ")}>
                            <button aria-label={ isFavorite } tabIndex="0" onClick={() => onClickFavorite( action, filename, { title, description, tags } )} style={{ backgroundColor:"transparent" }} className="border-0" >
                                <span className={ icon } style={{ color: "#2b6242"}} aria-hidden="true"></span>
                            </button>       
                        </Col>
                    </Row>
                </Card.Title>
                
                <Tags tags={ tags } />
                
                <Card.Text>
                    { description }
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

PostCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf( PropTypes.string ).isRequired,
    filename: PropTypes.string.isRequired,
};

export default PostCard;