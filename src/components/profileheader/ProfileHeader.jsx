import React from "react";
import "./ProfileHeader.css";

export default function ProfileHeader(props) {
  return (
    <div className="avatar-container">
      <img
        src={props.user && props.user.avatar_url}
        alt="user avatar"
        className="avatar-img"
      />
      <div className="user-details">
        <h1>{props.user && props.user.username}</h1>
        <h5>{props.user && props.user.email}</h5>
        <h5>{props.user && props.user.created_on}</h5>
      </div>
    </div>
  );
}
