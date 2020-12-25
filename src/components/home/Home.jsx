import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./Home.css";
import axios from "axios";
import TrackSwiper from "../trackswiper/TrackSwiper";

export default function Home(props) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios.get("/tracks/all").then((res) => {
      setTracks(res.data["tracks"]);
    });
  }, []);

  return (
    <>
      <Container>
        <h1>Home</h1>
      </Container>
      <Container>
        <TrackSwiper tracks={tracks} />
      </Container>
    </>
  );
}
