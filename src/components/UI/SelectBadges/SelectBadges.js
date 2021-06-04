import { Button, Badge } from 'react-bootstrap';

import classes from '../../../styles/SelectBadges.module.css';

/**
 * Render SelectBadges component.
 * @param {Object} props
 * @param {!string} props.label
 * @param {!boolean} props.selected
 * @param {!Function} props.onClickHandler
*/
const SelectBadges = ({ label, selected, onClickHandler }) => {
/**
 * @constant {!string} variant - Give the style class if is currently selected else none.
 */
    const variant = selected ? "": "outline-secondary";
/**
 * @constant {!string} style - Selected and non selected css style.
 */
    const style = selected ? [ classes.selected, "text-light" ].join(" ") : [ classes.btnOutlined ].join(" ");

    return (
        <Button onClick={() => onClickHandler( selected, label )} variant={ variant } className={[ style, "mr-1 mb-1" ].join(" ")}>
            <span className="text-capitalize">{ label }</span>
        </Button>
    );
};

export default SelectBadges;