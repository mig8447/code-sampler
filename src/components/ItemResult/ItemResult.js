import { ListGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Style from '../../styles/results.module.css';
import Tags from '../UI/Tags';
import Link from 'next/link';
/**
 * Render the ItemResult component.
 * @param {!Object} props
 * @param {!string} props.title - The string which describe the title.
 * @param {!string} props.description - The description for the post result component.
 * @param {!Array<string>} props.tags - The list of tags which is marked for the post.
 * @param {!string} props.version- Number of version for which the code works on.
 * @param {!boolean} props.favorite - Indicator to show if post is marked as favorite or not.
 * @param {!Function} props.onClickFavorite - Function for set state as favorite true or false.
 * @param {!string} props.filename - Name of the filename to redirect properly ex: href="/filename".
 */
const ItemResult = ({ title, description, tags, version, favorite, onClickFavorite, filename }) => {
/**
 * @constant {!string} icon - Set up the name for the library icon to show according if favorite.
 */
    const icon = favorite ? "fa fa-bookmark fa-sm fa-2x" : "fa fa-bookmark-o fa-sm fa-2x"
/**
 * @constant {!string} action - Set up the action according if favorite.
 */
    const action = favorite ? "delete" : "add";
/**
 * @constant {!string} isFavorite - For a better description the aria-label property is described according if is favorite post.
 */
    const isFavorite = favorite ? "favorite bookmark selected" : "favorite bookmark";
    return (
        <ListGroup.Item className={[Style.bgCardColor, Style.borderGrey].join(" ")}>
            <button aria-label={isFavorite} tabIndex="0" onClick={() => onClickFavorite(action, filename, { title, description, tags })} style={{ backgroundColor: "transparent" }} className="border-0 text-white float-right" >
                <span className={[" fa-sm fa-2x", icon].join(" ")} aria-hidden="true"></span>
            </button>

            <h4>
                <span className={Style.titlePost}>
                    <Link href={`/${filename}`}>

                        {title}

                    </Link>
                </span>

            </h4>
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
    version: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
    onClickFavorite: PropTypes.func.isRequired,
    filename: PropTypes.string.isRequired,
};

export default ItemResult;


