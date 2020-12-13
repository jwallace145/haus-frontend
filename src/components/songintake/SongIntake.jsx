import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default class SongIntake extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      artist: "",
      album: "",
      cover: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("artist", this.state.artist);
    formData.append("album", this.state.album);
    formData.append("cover", this.state.cover);

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    fetch("http://127.0.0.1:5000/songs?username=bob", requestOptions)
      .then((response) => response.json())
      .then((song) => {
        console.log(song);
      });
  }

  render() {
    return (
      <>
        <Container>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="enter title"
                onChange={(e) => this.setState({ title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="artist">
              <Form.Label>Artist</Form.Label>
              <Form.Control
                type="artist"
                placeholder="enter artist"
                onChange={(e) => this.setState({ artist: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="album">
              <Form.Label>Album</Form.Label>
              <Form.Control
                type="album"
                placeholder="enter album"
                onChange={(e) => this.setState({ album: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.File
                label="Album Cover"
                onChange={(e) => this.setState({ cover: e.target.files[0] })}
              ></Form.File>
            </Form.Group>
            <Button variant="dark" onClick={this.handleClick}>
              Submit
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}
