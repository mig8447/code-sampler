import { useEffect, useState } from "react";
import { Toast } from 'react-bootstrap';
import PropTypes from 'prop-types';

/**
 * Render the AlertNotification component.
 * @param {Object} props 
 * @param {string} props.description - Description that appear on the notification.
 */
const AlertNotification = ({ description }) => {
/**
 * @const closed - State that close the notification.
 */
    const [ closed, setClosed ] = useState( true );
/**
 * Method for automatically will be called for close the alert notification.
 * @typedef {Function} closeAlert
 */
    const closeAlert = () => {
        setClosed(!closed)
    };

    useEffect( () => {
/**
 * Onload and render of the component after 2.5 seconds the notification will disappear.
 * @typedef {Function} timer
 */
        const timer = setTimeout(() => {
            closeAlert();
        }, 2500);
    }, [] );

    return (
        <>  
            <Toast onClose={ closeAlert } show={ closed } animation={ true }>
                <Toast.Header>
                    <strong className="mr-auto">Notification</strong>
                    <small>Just now</small>
                </Toast.Header>
                <Toast.Body>{ description }</Toast.Body>
            </Toast> 
        </>
    );
};

AlertNotification.propTypes = {
    description: PropTypes.string.isRequired,
};

export default AlertNotification;