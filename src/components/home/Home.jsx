import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Song from "../song/Song";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function Home(props) {
  const [key, setKey] = useState("recentlyLiked");
  const [recentlyLikedSongs, setRecentlyLikedSongs] = useState([]);
  const [mostLikedSongs, setMostLikedSongs] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/songs")
      .then((response) => response.json())
      .then((songsList) => {
        setRecentlyLikedSongs(songsList["songs"]);
      });

    fetch("http://127.0.0.1:5000/songs/most-liked")
      .then((response) => response.json())
      .then((songsList) => {
        setMostLikedSongs(songsList["songs"]);
      });
  }, []);

  return (
    <>
      <Container>
        <h1>Home</h1>
      </Container>
      <Container>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="recentlyLiked" title="Recently Liked">
            <Container>
              <Row>
                <Col>
                  <div className="sidebar">
                    {recentlyLikedSongs.map((song) => (
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
          <Tab eventKey="mostLiked" title="Most Liked">
            <Container>
              <Row>
                <Col>
                  <div className="sidebar">
                    {mostLikedSongs.map((song) => (
                      <Song
                        key={song.id}
                        title={song.title}
                        artist={song.artist}
                        album={song.album}
                        likes={song.count}
                        imgsrc={song.cover_url}
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
