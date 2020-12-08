import React, { Component } from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    if (event.target.id === "email") {
      this.setState({ email: event.target.value });
    } else if (event.target.id === "password") {
      this.setState({ password: event.target.value });
    }
  }

  handleClick(event) {
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <Form>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="dark" onClick={this.handleClick}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
