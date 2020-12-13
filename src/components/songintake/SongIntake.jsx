import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function SongIntake(props) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [cover, setCover] = useState("");

  function handleClick(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("album", album);
    formData.append("cover", cover);

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

  return (
    <>
      <Container>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="title"
              placeholder="enter title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="artist">
            <Form.Label>Artist</Form.Label>
            <Form.Control
              type="artist"
              placeholder="enter artist"
              onChange={(e) => setArtist(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="album">
            <Form.Label>Album</Form.Label>
            <Form.Control
              type="album"
              placeholder="enter album"
              onChange={(e) => setAlbum(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.File
              label="Album Cover"
              onChange={(e) => setCover(e.target.files[0])}
            ></Form.File>
          </Form.Group>
          <Button variant="dark" onClick={handleClick}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
