import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  let history = useHistory();

  function handleClick(event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    fetch("http://127.0.0.1:5000/users", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    history.push("/home");
  }

  return (
    <>
      <Container>
        <h1>Register</h1>
      </Container>
      <Container>
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <Form.File
              label="Avatar"
              onChange={(event) => setAvatar(event.target.files[0])}
            />
          </Form.Group>
          <Button variant="dark" onClick={handleClick}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
