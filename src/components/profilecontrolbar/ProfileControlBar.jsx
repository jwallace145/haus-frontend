import React, { useState, useEffect } from "react";
import "./ProfileControlBar.css";
import Button from "react-bootstrap/Button";
import ProfileUpdate from "../profileupdate/ProfileUpdate";
import Spotify from "../spotify/Spotify";
import Container from "react-bootstrap/Container";

export default function ProfileControlBar(props) {
  const [display, setDisplay] = useState("none");

  function handleEditProfile(event) {
    event.preventDefault();
    setDisplay(display != "edit" ? "edit" : "none");
  }

  function handleSpotify(event) {
    event.preventDefault();
    setDisplay(display != "spotify" ? "spotify" : "none");
  }

  let page;
  if (display === "edit") {
    page = <ProfileUpdate />;
  } else if (display === "spotify") {
    page = (
      <Container>
        <Spotify />
      </Container>
    );
  }

  return (
    <>
      <Button variant="dark" onClick={handleEditProfile}>
        Edit Profile
      </Button>
      <Button variant="dark" onClick={handleSpotify}>
        Spotify
      </Button>
      {page}
    </>
  );
}
