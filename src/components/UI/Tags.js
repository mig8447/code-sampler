import PropTypes from 'prop-types';

import classes from '../../styles/Tags.module.css';

/**
 * The Tags component is rendered
 * @param {Object} props 
 * @param {!Array<string>} props.tags  - List of tags to map on the component.
 */
const Tags = ({ tags }) => (
    <div className={ [ "d-flex", "flex-row", "flex-wrap", "mb-2", classes.tags ].join(" ") } >
        { tags.map( tag => (
            <p className={ [ "text-capitalize", "mb-1 mr-1", "text-truncate", "px-2", classes.tag ].join(" ") } key={ tag }>
                { tag }
            </p>
        ))}
    </div>
);

Tags.propTypes = {
    tags: PropTypes.arrayOf( PropTypes.string ).isRequired,
};

export default Tags;