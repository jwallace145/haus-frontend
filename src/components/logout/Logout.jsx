import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export default function Logout(props) {
  let history = useHistory();

  function handleClick() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: props.username,
      }),
    };

    fetch("http://127.0.0.1:5000/logout", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    history.push("/login");
  }

  return (
    <>
      <Container>
        <h1>Logout {props.username}</h1>
      </Container>
      <Container>
        <Button variant="outline-dark" onClick={handleClick}>
          Log out
        </Button>
      </Container>
    </>
  );
}
