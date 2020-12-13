import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "./ProfileHeader.css";

export default function ProfileHeader(props) {
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [dateCreated, setDateCreated] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/users?username=" + props.username)
      .then((response) => response.json())
      .then((data) => {
        setEmail(data["email"]);
        setAvatarUrl(data["avatar_url"]);
        setDateCreated(data["created_on"]);
      });
  }, []);

  return (
    <div className="avatar-container">
      <img src={avatarUrl} className="avatar-img" />
      <div className="sidebar user-details">
        <h1>{props.username}</h1>
        <h5>{email}</h5>
        <h5>{dateCreated}</h5>
      </div>
    </div>
  );
}
