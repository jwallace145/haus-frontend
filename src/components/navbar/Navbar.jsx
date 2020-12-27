import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import axios from "axios";
import { AuthenticatedItems } from "./AuthenticatedItems";
import { UnauthenticatedItems } from "./UnauthenticatedItems";

export default function Navbar(props) {
  const [click, setClick] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/users/current", { withCredentials: true }).then((res) => {
      if (res.data["exists"]) {
        setItems(AuthenticatedItems);
      } else {
        setItems(UnauthenticatedItems);
      }
    });
  }, []);

  function handleClick(event) {
    event.preventDefault();
    setClick(!click);
  }

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        Haus <i className="fas fa-headphones-alt"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {items.map((item) => {
          return (
            <li>
              <a className="nav-link" href={item.href}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
