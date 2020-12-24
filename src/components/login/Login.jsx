import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  function handleClick(event) {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    axios.post("/login", formData, { withCredentials: true }).then((res) => {
      console.log(res);
    });

    history.push("/home");
  }

  return (
    <>
      <Container>
        <h1>Login</h1>
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
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
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
