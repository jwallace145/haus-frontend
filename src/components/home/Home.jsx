import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./Home.css";
import SongBook from "../songbook/SongBook";
import axios from "axios";

export default function Home(props) {
  const [key, setKey] = useState("recentlyLiked");
  const [recentlyLikedSongs, setRecentlyLikedSongs] = useState([]);
  const [mostLikedSongs, setMostLikedSongs] = useState([]);

  useEffect(() => {
    axios.get("/songs/recent").then((res) => {
      setRecentlyLikedSongs(res.data["songs"]);
    });

    axios.get("/songs/liked").then((res) => {
      setMostLikedSongs(res.data["songs"]);
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
