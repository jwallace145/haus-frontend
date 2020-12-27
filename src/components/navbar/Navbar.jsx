import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import axios from "axios";

export default function Navbar(props) {
  const [user, setUser] = useState(null);
  const [click, setClick] = useState(false);

  const authenticatedItems = [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "Profile",
      href: "/profile",
    },
    {
      title: "Logout",
      href: "/logout",
    },
  ];

  const unauthenticatedItems = [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "Register",
      href: "/register",
    },
    {
      title: "Login",
      href: "/login",
    },
  ];

  useEffect(() => {
    axios.get("/users/current", { withCredentials: true }).then((res) => {
      if (res.data["exists"]) {
        setUser(res.data["user"]);
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
        {user &&
          authenticatedItems.map((item, index) => {
            return (
              <li>
                <a className="nav-link" href={item.href}>
                  {item.title}
                </a>
              </li>
            );
          })}
        {!user &&
          unauthenticatedItems.map((item, index) => {
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
