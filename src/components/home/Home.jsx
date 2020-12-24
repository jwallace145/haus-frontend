import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./Home.css";
import SongBook from "../songbook/SongBook";
import axios from "axios";
import Spotify from "../spotify/Spotify";

export default function Home(props) {
  const [key, setKey] = useState("recentlyLiked");
  const [recentlyLikedSongs, setRecentlyLikedSongs] = useState([]);
  const [mostLikedSongs, setMostLikedSongs] = useState([]);

  useEffect(() => {
    axios.get("/tracks/all").then((res) => {
      console.log(res.data["tracks"]);
      setRecentlyLikedSongs(res.data["tracks"]);
    });

    axios.get("/tracks/all").then((res) => {
      console.log(res.data["tracks"]);
      setMostLikedSongs(res.data["tracks"]);
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
                  <SongBook songs={recentlyLikedSongs} pageSize={6} />
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="mostLiked" title="Most Liked">
            <Container>
              <Row>
                <Col>
                  <SongBook songs={mostLikedSongs} pageSize={6} />
                </Col>
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}
