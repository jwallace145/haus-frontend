import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Song.css";

export default function Song(props) {
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
      </Card.Body>
    </Card>
  );
}
