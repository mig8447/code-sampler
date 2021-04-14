import classes from '../../../styles/SelectBadges.module.css';
import { useState } from 'react';
import { Button, Badge } from 'react-bootstrap';


const SelectBadges = ({ label }) => {

    const [selected, setSelected] = useState(localStorage.getItem(label));
    let variant = selected ? "": "light";
    let style = selected ? [classes.selected, "text-light"].join(" ") : null;
    let icon = selected ? "fa fa-check-square" : "fa fa-square-o";

    const onClickHandler = () => {
        if(selected){
            localStorage.removeItem(label)
            setSelected(false);
        } else{
            localStorage.setItem(label, true);
            setSelected(true);
        }
    }

    return (
        <Button onClick={onClickHandler} variant={variant} className={[style, "mr-1 mb-1"].join(" ")}>
            <span className="text-capitalize">{label}</span>
            <Badge variant={variant}  >
                <span aria-hidden="true" className={icon}></span>
            </Badge>
        </Button>
    );

}


export default SelectBadges;