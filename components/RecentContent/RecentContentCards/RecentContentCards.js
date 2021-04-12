import { Container } from "react-bootstrap";
import classes from "../../../styles/RecentContentCards.module.css";

const RecentContentCards = ({children, style}) => (
    <Container style={style} className={classes.recentCards} fluid>
        {children}
    </Container>

)

export default RecentContentCards;