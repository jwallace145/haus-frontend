import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./Spotify.css";
import Container from "react-bootstrap/Container";

export default function Spotify(props) {
  function handleSpotifyAuth(event) {
    event.preventDefault();
    window.location.href = "http://localhost:8080/spotify/auth";
  }

  return (
    <div className="spotify-container">
      <Container>
        <Button variant="dark" onClick={handleSpotifyAuth}>
          Authorize
        </Button>
      </Container>
    </div>
  );
}
