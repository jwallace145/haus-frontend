import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Song(props) {
  return (
    <Card bg="light">
      <Card.Header>
        <Card.Title>
          {props.title} - {props.artist}
        </Card.Title>
        <Card.Subtitle>{props.album}</Card.Subtitle>
      </Card.Header>
      <Card.Img className="photo" src={props.imgsrc} />
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item variant="dark">
            number of likes: {props.likes}
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            created on: {props.created_on}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
