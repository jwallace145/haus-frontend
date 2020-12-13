import React, { useState, useEffect } from "react";
import SongIntake from "../songintake/SongIntake";
import Container from "react-bootstrap/Container";
import Song from "../song/Song";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Profile(props) {
  const [username, setUsername] = useState(props.match.params.username);
  const [songs, setSongs] = useState([]);
  const [key, setKey] = useState("liked-songs");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/songs?username=" + username)
      .then((response) => response.json())
      .then((data) => {
        console.log(data["songs"]);
        setSongs(data["songs"]);
        console.log("songs from useeffeect: " + songs);
      });
  }, []);

  return (
    <>
      <Container>
        <h1>{username}</h1>
        <img src="https://jwalls-fun-bucket.s3.amazonaws.com/album-covers/led-zepplin-IV.jpg" />
      </Container>
      <Container>
        <Tabs activeKey={key} onSelect={(event) => setKey(event)}>
          <Tab eventKey="liked-songs" title="Liked Songs">
            <Container>
              <Row>
                <Col>
                  <div className="sidebar">
                    {songs.map((song) => (
                      <Song
                        key={song.id}
                        title={song.title}
                        artist={song.artist}
                        album={song.album}
                        likes={song.likes}
                        imgsrc={song.cover_url}
                        created_on={song.created_on}
                      />
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="song-input" title="Song Input">
            <div className="sidebar">
              <SongIntake />
            </div>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}
