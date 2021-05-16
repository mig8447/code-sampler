import { Container } from "react-bootstrap";
import classes from "../../styles/ContentCards.module.css";

const ContentCards = ({children, style}) => (
    <Container style={style} className={classes.recentCards} fluid>
        {children}
    </Container>

)

export default ContentCards;