import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./Spotify.css";
import Form from "react-bootstrap/Form";

export default function Spotify(props) {
  const [playlistSearch, setPlaylistSearch] = useState("");
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get("/spotify/playlists", { withCredentials: true }).then((res) => {
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
      <Form>
        <Form.Group>
          <Form.Label>Spotify Playlist</Form.Label>
          <Form.Control
            type="text"
            placeholder="playlists..."
            onChange={(e) => setPlaylistSearch(e.target.value)}
          />
          <Form.Text>Search for your Spotify playlists</Form.Text>
          <Button variant="dark" onClick={handleSearchPlaylist}>
            Search
          </Button>
        </Form.Group>
      </Form>
      <Button variant="dark" onClick={handleSpotifyAuth}>
        Authorize
      </Button>
    </div>
  );
}
