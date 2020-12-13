import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Header(props) {
  const [search, setSearch] = useState("");

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/home"> HAUS </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href={"/profile/" + props.username}>Profile</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
        <Nav.Link href={"/logout/" + props.username}>Logout</Nav.Link>
        <Nav.Link href="/search">Search</Nav.Link>
      </Nav>
      <Form inline>
        <Form.Group controlId="query">
          <Form.Control
            type="text"
            placeholder="Song Search"
            className="mr-sm-2"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </Form.Group>
        <Button
          variant="outline-light"
          onClick={(event) => {
            event.preventDefault();
            console.log(search);
          }}
        >
          Search
        </Button>
      </Form>
    </Navbar>
  );
}
