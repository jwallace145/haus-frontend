import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Spotify(props) {
  let history = useHistory();

  function handleClick(event) {
    event.preventDefault();
    window.location.href = "http://localhost:8080/spotify/auth";
  }

  function handleGetSongs(event) {
    event.preventDefault();
    axios
      .get("/spotify/tracks", { withCredentials: true })
      .then((res) => console.log(res.data));
  }

  return (
    <>
      <Button variant="dark" onClick={handleClick}>
        Spotify
      </Button>
      <Button variant="dark" onClick={handleGetSongs}>
        Get Songs
      </Button>
    </>
  );
}
