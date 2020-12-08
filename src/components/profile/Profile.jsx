import React, { Component } from "react";
import "./Profile.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import SongIntake from "../songintake/SongIntake";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songInput: false,
      likedSongs: true,
    };

    this.handleClick = this.handleClick.bind(this);
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
      page = <SongIntake />;
    } else if (this.state.likedSongs) {
      page = <h1>liked songs!</h1>;
    }

    return (
      <>
        <Container>
          <Row>
            <h1>Profile</h1>
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
