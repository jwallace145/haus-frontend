import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class SongIntake extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      album: "",
      artist: "",
      songfile: "",
      songfilename: "",
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

    fetch("http://127.0.0.1:5000/songs?username=bob", requestOptions)
      .then((response) => response.json())
      .then((song) => {
        console.log("song id: " + song["song"]["id"]);
        this.setState({ id: song["song"]["id"] });

        let formData = new FormData();

        formData.append("song_cover", this.state.songfile);
        formData.append("song_id", this.state.id);

        let options = {
          method: "POST",
          body: formData,
        };
        fetch("http://127.0.0.1:5000/songs/upload-song-cover", options)
          .then((response) => response.json())
          .then((data) => console.log(data));
      });
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
            <Form.Group>
              <Form.File
                label="Album Cover"
                onChange={(e) =>
                  this.setState({
                    songfile: e.target.files[0],
                    songfilename: e.target.files[0].name,
                  })
                }
              ></Form.File>
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
