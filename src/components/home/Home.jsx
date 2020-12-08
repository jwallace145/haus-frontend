import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Song from "../song/Song";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:5000/songs")
      .then((response) => response.json())
      .then((songsList) => {
        console.log(songsList["songs"]);
        this.setState({ songs: songsList["songs"] });
      });
  }

  render() {
    return (
      <>
        <Container>
          <h1>Home</h1>
        </Container>
        <Container>
          <Row>
            <Col>
              {this.state.songs.map((song) => (
                <Song title={song.title} artist={song.artist} />
              ))}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
