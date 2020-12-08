import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import SongIntake from "../songintake/SongIntake";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Song from "../song/Song";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "test_user1",
      songInput: false,
      likedSongs: true,
      songs: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/songs/" + this.state.username)
      .then((response) => response.json())
      .then((songsList) => {
        this.setState({ songs: songsList["songs"] });
      });
  }

  handleClick(event) {
    event.preventDefault();

    if (event.target.value === "liked-songs") {
      this.setState({
        songInput: false,
        likedSongs: true,
      });
    } else if (event.target.value === "input-songs") {
      this.setState({
        songInput: true,
        likedSongs: false,
      });
    }
  }

  render() {
    let page;
    if (this.state.songInput) {
      page = <SongIntake username={this.state.username} />;
    } else if (this.state.likedSongs) {
      page = this.state.songs.map((song) => (
        <Song title={song.title} artist={song.artist}></Song>
      ));
    }

    return (
      <>
        <Container>
          <Row>
            <h1>Profile {this.state.username}</h1>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <ButtonGroup vertical>
                <Button
                  variant="dark"
                  value="liked-songs"
                  onClick={this.handleClick}
                >
                  Liked Songs
                </Button>
                <Button
                  variant="dark"
                  value="input-songs"
                  onClick={this.handleClick}
                >
                  Input Song
                </Button>
              </ButtonGroup>
            </Col>
            <Col xs={10}>{page}</Col>
          </Row>
        </Container>
      </>
    );
  }
}
