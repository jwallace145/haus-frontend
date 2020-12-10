import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class SongIntake extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      album: "",
      artist: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.id === "title") {
      this.setState({ title: event.target.value });
    } else if (event.target.id === "album") {
      this.setState({ album: event.target.value });
    } else if (event.target.id === "artist") {
      this.setState({ artist: event.target.value });
    }
  }

  handleClick(e) {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: this.state.title,
        artist: this.state.artist,
        album: this.state.album,
      }),
    };

    fetch(
      "http://127.0.0.1:5000/songs?username=" + this.props.username,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <>
        <div className="container">
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="enter title"
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">Enter name of song</Form.Text>
            </Form.Group>
            <Form.Group controlId="album">
              <Form.Label>Album</Form.Label>
              <Form.Control
                type="album"
                placeholder="enter album"
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">Enter name of album</Form.Text>
            </Form.Group>
            <Form.Group controlId="artist">
              <Form.Label>Artist</Form.Label>
              <Form.Control
                type="artist"
                placeholder="enter artist"
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">Enter name of artist</Form.Text>
            </Form.Group>
            <Button variant="dark" onClick={this.handleClick}>
              Submit
            </Button>
          </Form>
        </div>
      </>
    );
  }
}
