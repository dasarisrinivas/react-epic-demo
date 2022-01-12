import React from "react";

import { Modal } from "react-bootstrap";

const MedflowModal = ({ open, setOpen, title, children, size }) => {
  return (
    <div className="medflowModal">
      <Modal
        dialogClassName="medflowModal"
        show={open}
        onHide={() => setOpen(false)}
        size={size}
      >
        <Modal.Header closeButton={true}>
          <Modal.Title id="modal-title" className="medflowModalTitle">
            <h3>{title}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </div>
  );
};

export default MedflowModal;
