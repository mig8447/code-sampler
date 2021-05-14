import { Toast } from 'react-bootstrap';
import {  useEffect, useState } from "react";
import PropTypes from 'prop-types';

const AlertNotification = ({ description }) => {

    const [closed, setClosed] = useState(true);

    const closeAlert = () => {
        setClosed(!closed)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            closeAlert()
          }, 2500);
    }, [])

    return (
        <>  
             <Toast  onClose={closeAlert} show={closed} animation={true}>
                <Toast.Header>
                    <strong className="mr-auto">Notification</strong>
                    <small>A moment ago</small>
                </Toast.Header>
                <Toast.Body>{description}</Toast.Body>
            </Toast> 
        </>
    )

}

AlertNotification.propTypes = {
    description: PropTypes.string.isRequired,

};

export default AlertNotification;