import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import AddMoodForm from "./AddMoodForm";

export default function AddMood() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <div>
      <button type="button" onClick={handleShow}>
        Log your mood
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Tell us how you are feeling</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddMoodForm />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
