import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default class Logout extends Component {
  constructor(props) {
    super(props);

    this.handleClick.bind(this);
  }

  handleClick() {
    console.log("handle logout button click");
  }

  render() {
    return (
      <>
        <Container>
          <h1>Logout</h1>
        </Container>
        <Container>
          <Button variant="outline-dark" onClick={this.handleClick}>
            Log out
          </Button>
        </Container>
      </>
    );
  }
}
