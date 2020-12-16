import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./ProfileHeader.css";

export default function ProfileHeader(props) {
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [dateCreated, setDateCreated] = useState("");

  useEffect(() => {
    Axios.get("/users/get?username=" + props.username).then((res) => {
      setEmail(res.data["user"]["email"]);
      setAvatarUrl(res.data["user"]["avatar_url"]);
      setDateCreated(res.data["user"]["created_on"]);
    });
  }, []);

  return (
    <div className="avatar-container">
      <img src={avatarUrl} alt="user avatar" className="avatar-img" />
      <div className="user-details">
        <h1>{props.username}</h1>
        <h5>{email}</h5>
        <h5>{dateCreated}</h5>
      </div>
    </div>
  );
}
