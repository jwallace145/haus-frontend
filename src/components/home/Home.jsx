import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Song from "../song/Song";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
    };

    this.handleTabSelect = this.handleTabSelect.bind(this);
  }
  componentDidMount() {
    fetch("http://127.0.0.1:5000/songs/most-liked")
      .then((response) => response.json())
      .then((songsList) => {
        console.log(songsList["songs"]);
        this.setState({ songs: songsList["songs"] });
      });
  }

  handleTabSelect(tab) {
    if (tab === "mostLiked") {
      console.log("MOST LIKED TAB SELECTED");
    } else if (tab === "recentlyLiked") {
      console.log("RECENTLY LIKED TAB SELECTED");
    }
  }

  render() {
    return (
      <>
        <Container>
          <h1>Home</h1>
        </Container>
        <Container>
          <Tabs
            defaultActiveKey="recentlyLiked"
            onSelect={this.handleTabSelect}
          >
            <Tab eventKey="recentlyLiked" title="Recently Liked">
              <Container>
                <Row>
                  <Col>
                    <div className="sidebar">
                      {this.state.songs.map((song) => (
                        <Song
                          title={song.title}
                          artist={song.artist}
                          album={song.album}
                          likes={song.count}
                        />
                      ))}
                    </div>
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="mostLiked" title="Most Liked">
              <Container>
                <Row>
                  <Col>
                    <div className="sidebar">
                      {this.state.songs.map((song) => (
                        <Song
                          title={song.title}
                          artist={song.artist}
                          album={song.album}
                          created_on={song.created_on}
                        />
                      ))}
                    </div>
                  </Col>
                </Row>
              </Container>
            </Tab>
          </Tabs>
        </Container>
      </>
    );
  }
}
