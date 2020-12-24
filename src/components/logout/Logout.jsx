import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Logout(props) {
  let history = useHistory();

  function handleClick() {
    axios.get("/logout", { withCredentials: true }).then((res) => {
      console.log(res.data);
    });

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
