import classes from '../../../styles/SelectBadges.module.css';
import { Button, Badge } from 'react-bootstrap';


const SelectBadges = ({ label, selected, onClickHandler }) => {
    
    let variant = selected ? "": "light";
    let style = selected ? [classes.selected, "text-light"].join(" ") : null;
    let icon = selected ? "fa fa-check-square" : "fa fa-square-o";


    return (
        <Button onClick={() => onClickHandler(selected, label)} variant={variant} className={[style, "mr-1 mb-1"].join(" ")}>
            <span className="text-capitalize">{label}</span>
            <Badge variant={variant}  >
                <span aria-hidden="true" className={icon}></span>
            </Badge>
        </Button>
    );

}


export default SelectBadges;