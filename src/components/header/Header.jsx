import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import axios from "axios";

export default function Header(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get("/users/current", { withCredentials: true }).then((res) => {
      setUser(res.data["user"]);
    });
  }, []);

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/home">
        HAUS <i className="fas fa-headphones-alt"></i>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href={"/profile"}>Profile</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
        <Nav.Link href={"/logout/" + props.username}>Logout</Nav.Link>
        <Nav.Link href="/search">Search</Nav.Link>
      </Nav>
    </Navbar>
  );
}
