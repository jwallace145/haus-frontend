import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ProfileUpdate.css";
import { useHistory } from "react-router-dom";

export default function ProfileUpdate(props) {
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  const [showProfileEdit, setShowProfileEdit] = useState(false);

  let history = useHistory();

  function handleClick(event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append("username", props.username);
    formData.append("new_username", newUsername);
    formData.append("new_email", newEmail);
    formData.append("new_avatar", newAvatar);

    const requestOptions = {
      method: "PUT",
      body: formData,
    };

    fetch("http://127.0.0.1:5000/users", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    history.push("/profile/" + newUsername);
  }

  let profileEdit;
  if (showProfileEdit) {
    profileEdit = (
      <>
        <hr></hr>
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
      </>
    );
  } else {
    profileEdit = <div></div>;
  }

  return (
    <div className="profile-edit">
      <Button
        variant="dark"
        onClick={(event) => {
          setShowProfileEdit(!showProfileEdit);
        }}
      >
        Edit Profile
      </Button>
      {profileEdit}
    </div>
  );
}
