import {ListGroup, Button} from 'react-bootstrap';
import Tags from '../UI/Tags';
import Style from '../../styles/results.module.css';
import PropTypes from 'prop-types';

const ItemResult = ( {title, description, tags, version} ) => {
    return (
        <ListGroup.Item className={[Style.bgCardColor, Style.borderGrey].join(" ")}>
            <button style={{ backgroundColor: "transparent" }} className="border-0 text-white float-right" >
                <span className={"fa fa-bookmark-o fa-sm fa-2x"} aria-hidden="true"></span>
            </button>
            <h4>{title}</h4>
            <Tags tags={tags} />
            <p>{description}</p>
            <Button variant="outline-light" size="sm" disabled> DB  {version}</Button>
        </ListGroup.Item>
    )
}

ItemResult.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    version: PropTypes.string.isRequired
};

export default ItemResult;


