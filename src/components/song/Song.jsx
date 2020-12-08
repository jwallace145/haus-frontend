import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Song extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card bg="light">
        <Card.Header>{this.props.title}</Card.Header>
        <Card.Body>
          <Card.Subtitle>{this.props.artist}</Card.Subtitle>
        </Card.Body>
      </Card>
    );
  }
}
