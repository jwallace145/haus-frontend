import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    console.log(this.state.query);
  }

  render() {
    console.log(this.props.username);
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home"> HAUS </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href={"/profile/" + this.props.username}>Profile</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href={"/logout/" + this.props.username}>Logout</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
        </Nav>
        <Form inline>
          <Form.Group controlId="query">
            <Form.Control
              type="text"
              placeholder="Song Search"
              className="mr-sm-2"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="outline-light" onClick={this.handleClick}>
            Search
          </Button>
        </Form>
      </Navbar>
    );
  }
}
