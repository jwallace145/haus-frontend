import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Song extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/user/" + this.props.userid)
      .then((response) => response.json())
      .then((user) => this.setState({ username: user["username"] }));
  }

  render() {
    return (
      <Card bg="light">
        <Card.Header>
          <Card.Title>
            {this.props.title} - {this.props.artist}
          </Card.Title>
          <Card.Subtitle>{this.props.album}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item variant="dark">
              user: {this.state.username}
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              created on: {this.props.created_on}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}
