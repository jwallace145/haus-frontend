import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

export default class Header extends Component {
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
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    );
  }
}
