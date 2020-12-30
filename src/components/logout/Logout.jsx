import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Logout(props) {
  const [show, setShow] = useState(true);

  let history = useHistory();

  const handleShow = () => setShow(false);

  const handleLogout = () => {
    axios.get("/logout", { withCredentials: true }).then((res) => {
      console.log(res.data);
    });

    history.push("/home");
  };

  return (
    <Modal show={show} onHide={handleShow}>
      <Modal.Header closeButton>
        <Modal.Title>Logout</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="dark" onClick={handleLogout}>
          Logout
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
