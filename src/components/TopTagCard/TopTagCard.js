import { Card, Badge, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

import classes from '../../styles/TopTagCard.module.css';

/**
 * Render the ResultsDropDown component.
 * @param {Object} props 
 * @param {!string} props.tagName - The tag name to be renderer in the card title.
 * @param {!Array<{filename: string, title:string}>} props.posts - Posts that have that tag.
 * @param {!number} props.countPosts - Length of props.tagName.
 */
const TopTagCard = ({ tagName, posts, countPosts, style }) => (
    <Card style={ style } className={ [ classes.topCategoryCard, "text-light" ].join(" ") }>
        <Card.Body>
            <Card.Title className={ [ classes.borderBottomLight, "pb-4" ].join(" ") } >
                <Row>
                    <Col>
                        <p className="text-capitalize mb-0">{ tagName }</p>
                    </Col>
                    <Col xs="auto" className="d-flex justify-content-end">
                        <Badge variant="light">{ countPosts }</Badge>
                    </Col>
                </Row>
            </Card.Title>
            <div className="d-flex flex-column">
                { posts.map( post =>

                    <p key={ post.filename } className={ [ classes.borderBottomLight, "pb-3" ].join(" ") }>
                        <Link href={ `/${ post.filename }` } >
                            <a className={ classes.postLink }>{ post.title }</a>
                        </Link>
                    </p>
                ) }
            </div>
        </Card.Body>
    </Card>
);

export default TopTagCard;