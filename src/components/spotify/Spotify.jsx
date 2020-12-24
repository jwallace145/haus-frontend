import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./Spotify.css";
import Container from "react-bootstrap/Container";

export default function Spotify(props) {
  const [playlistSearch, setPlaylistSearch] = useState("");
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get("/spotify/playlists", { withCredentials: true }).then((res) => {
      console.log("playlists from /spotify/playlists endpoint");
      console.log(res.data["playlists"]);
      setPlaylists(res.data["playlists"]);
    });
  }, []);

  function handleSpotifyAuth(event) {
    event.preventDefault();
    window.location.href = "http://localhost:8080/spotify/auth";
  }

  function handleSearchPlaylist(event) {
    event.preventDefault();

    playlists.forEach((playlist) => {
      if (playlist["playlist_name"] === playlistSearch) {
        console.log("success!");

        axios
          .get("/spotify/playlists/" + playlist["playlist_id"], {
            withCredentials: true,
          })
          .then((res) => {
            console.log("double success");
            console.log(res.data["tracks"]);
          });
      }
    });
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
