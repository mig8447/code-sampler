import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

/**
 * Render the GenerateModal component.
 * @param {Object} props
 * @param {!boolean} props.show - Indicate if the modal is open.
 * @param {!Function} props.handleClose - Set the state of the parent component to close modal.
 * @param {!string} props.title - Modal's title.
 * @param {!Object} props.children - Children props for the wrapped component.
 */
const GenerateModal = ({ show, handleClose, title, children }) => (
    <Modal show={ show } onHide={ handleClose }>
        <Modal.Header>
          <Modal.Title>{ title }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            { children }
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: "var(--code-sample-search-bar-bg-color)", borderColor: "var(--code-sample-search-bar-bg-color)" }} onClick={ handleClose }>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
);

GenerateModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default GenerateModal;