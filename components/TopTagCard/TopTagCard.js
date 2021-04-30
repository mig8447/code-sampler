import { Card, Badge, Row, Col } from "react-bootstrap";
import classes from "../../styles/TopTagCard.module.css";
import Link from 'next/link';

const TopCategoryCard = ({ categoryName, posts, countPosts }) => (
    <Card style={{ flexBasis: "30%" }} className={[classes.topCategoryCard, "text-light", "mt-3"].join(" ")}>
        <Card.Body>
            <Card.Title className=" border-bottom pb-4" >
                <Row>
                    <Col>
                        <p className="text-capitalize mb-0">{categoryName}</p>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Badge variant="light">count: {countPosts}</Badge>
                    </Col>
                </Row>
            </Card.Title>
            <div className="d-flex flex-column">
                {posts.map(post =>

                    <p key={post.filename} className={["border-bottom", "pb-3"].join(" ")}>
                        <Link href={`/${post.filename}`} >
                            <a className={classes.postLink}>{post.title}</a>
                        </Link>
                    </p>
                )}
            </div>
        </Card.Body>
    </Card>
)


export default TopCategoryCard;