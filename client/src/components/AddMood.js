import React, { useState } from "react";
import { useForm } from "react-hook-form";
import API from "../utils/user.api";
import Modal from "react-bootstrap/Modal";

export default function AddMood() {
  const id = localStorage.getItem("id");
  const { register, handleSubmit, errors } = useForm();

  const submitForm = data => {
    API.addMood(id)
      .then(res => {
        console.log(data);
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const onSubmit = data => {
    console.log(data);
    submitForm(data);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    onSubmit();
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="I am feeling ..."
              name="emotion"
              ref={register({ required: true })}
            />
            {errors.emotion && <p>This field is required</p>}
            <label>Select an emoji:</label>
            <select id="emoji" name="emoji" ref={register({ required: true })}>
              <option value="1">=)</option>
              <option value="2">=|</option>
              <option value="3">=(</option>
            </select>
            {errors.empoji && <p>This field is required</p>}
            <label>Comments:</label>
            <textarea placeholder="" name="comment" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" onClick={handleClose}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
