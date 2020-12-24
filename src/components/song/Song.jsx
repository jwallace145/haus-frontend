import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Song.css";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Song(props) {
  function handleClick(event) {
    event.preventDefault();

    axios
      .delete("/songs/delete?song_id=" + props.id)
      .then((res) => console.log(res));
  }

  return (
    <Card bg="light" className="song-card">
      <Card.Header>
        <Card.Title>
          {props.title} - {props.artist}
        </Card.Title>
        <Card.Subtitle>{props.album}</Card.Subtitle>
      </Card.Header>
      <Card.Img className="photo" src={props.imgsrc} />
      <Card.Body>
        <ListGroup variant="flush" className="song-metadata">
          <ListGroup.Item variant="dark" className="song-metadata">
            Likes: {props.likes}
          </ListGroup.Item>
          <ListGroup.Item variant="dark" className="song-metadata">
            Created On: {props.created_on}
          </ListGroup.Item>
        </ListGroup>
        <Button variant="info" onClick={handleClick}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
