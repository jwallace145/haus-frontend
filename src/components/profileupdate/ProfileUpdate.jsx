import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ProfileUpdate.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function ProfileUpdate(props) {
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAvatar, setNewAvatar] = useState("");

  let history = useHistory();

  function handleClick(event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append("username", newUsername);
    formData.append("email", newEmail);
    formData.append("avatar", newAvatar);

    axios.put("/users/edit", formData).then((res) => {});

    history.push("/profile");
  }

  return (
    <>
      <div className="profile-edit">
        <h3>Profile Update</h3>
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="edit username"
              onChange={(event) => setNewUsername(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="edit email"
              onChange={(event) => setNewEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="avatar">
            <Form.File
              label="Avatar"
              onChange={(event) => setNewAvatar(event.target.files[0])}
            />
          </Form.Group>
          <Button variant="dark" onClick={handleClick}>
            Edit
          </Button>
        </Form>
      </div>
    </>
  );
}
