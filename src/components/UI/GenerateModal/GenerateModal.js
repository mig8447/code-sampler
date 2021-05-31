import { Modal, Button } from 'react-bootstrap';

const GenerateModal = ({show, handleClose, title, children}) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
          
          <Button style={{backgroundColor: "--code-sample-badge-hover-color"}} onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
)

export default GenerateModal;