import React, { useState } from "react";
import EditData from "./EditData";
import { Modal, Button } from "react-bootstrap";

const MapComponent = (props) => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  console.log(name);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <h1>Name: {props.user.username}</h1>
      <h2>age:{props.user.age}</h2>
      <button onClick={handleShow}>Edit</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditData user={props.user} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MapComponent;
