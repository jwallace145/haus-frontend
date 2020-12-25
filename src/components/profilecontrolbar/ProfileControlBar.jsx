import React, { useState } from "react";
import "./ProfileControlBar.css";
import Button from "react-bootstrap/Button";
import ProfileUpdate from "../profileupdate/ProfileUpdate";
import "./ProfileControlBar";
import ProfileAvatar from "../profileavatar/ProfileAvatar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProfileControlBar(props) {
  const [display, setDisplay] = useState("none");

  const notify = () => {
    toast.success("Wow so easy!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });
  };

  function handleEditAvatar(event) {
    event.preventDefault();
    setDisplay(display !== "edit-avatar" ? "edit-avatar" : "none");
  }

  function handleEditUser(event) {
    event.preventDefault();
    setDisplay(display !== "edit-profile" ? "edit-profile" : "none");
  }

  function handleSpotifyAuth(event) {
    event.preventDefault();
    setDisplay("none");
    window.location.href = "http://localhost:8080/spotify/auth";
  }

  function handleSpotifyIngest(event) {
    event.preventDefault();

    notify();

    axios.get("/spotify/ingest", { withCredentials: true }).then((res) => {
      console.log(res);
    });
  }

  return (
    <>
      <div className="profile-controls-container">
        <Button variant="dark" onClick={handleEditAvatar}>
          Edit Avatar
        </Button>
        <Button variant="dark" onClick={handleEditUser}>
          Edit Profile
        </Button>
        <Button variant="dark" onClick={handleSpotifyAuth}>
          Spotify Auth
        </Button>
        <Button variant="dark" onClick={handleSpotifyIngest}>
          Spotify Ingest
        </Button>
      </div>
      {display === "edit-avatar" && <ProfileAvatar user={props.user} />}
      {display === "edit-profile" && <ProfileUpdate user={props.user} />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
      />
    </>
  );
}
