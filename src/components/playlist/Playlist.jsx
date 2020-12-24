import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./Playlist.css";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Playlist(props) {
  function handleClick(event) {
    event.preventDefault();

    axios
      .get("/spotify/playlists/" + props.spotify_id, { withCredentials: true })
      .then((res) => {
        console.log(res.data["tracks"]);
      });
  }

  return (
    <>
      <Card bg="light" className="playlist-card">
        <Card.Header>
          <Card.Title>{props.name}</Card.Title>
        </Card.Header>
        <Card.Img src={props.cover_url} />
        <Button variant="success" onClick={handleClick}>
          Ingest
        </Button>
      </Card>
    </>
  );
}
