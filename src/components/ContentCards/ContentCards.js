import { Container } from "react-bootstrap";
import PropTypes from 'prop-types';
import classes from "../../styles/ContentCards.module.css";

/**
 * Render content cards.
 * @param {!Object} props
 * @param {Object} props.children - Contained children instead the wrapped element.
 * @param {Object} props.style - An object with the css style for the object.
 */
const ContentCards = ({children, style}) => (
    <Container style={style} className={classes.recentCards} fluid>
        {children}
    </Container>
)

ContentCards.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    style: PropTypes.instanceOf(Array)
};

export default ContentCards;