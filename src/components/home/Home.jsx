import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import TrackSwiper from "../trackswiper/TrackSwiper";
import PlaylistSwiper from "../playlistswiper/PlaylistSwiper";
import "./Home.css";
import "swiper/css/swiper.css";

export default function Home(props) {
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios.get("/playlists/all").then((res) => {
      setPlaylists(res.data["playlists"]);
    });

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
        <div className="home-playlist-swiper-container">
          <div className="home-playlist-swiper-title">
            <h5>
              Playlists <i className="fas fa-compact-disc"></i>
            </h5>
          </div>
          <div className="home-playlist-swiper-body">
            <p>
              Haus recommends new music based off the patterns found between
              users playlists. The more playlists Haus analyzes, the better the
              performance!
            </p>
          </div>
        </div>
        <PlaylistSwiper playlists={playlists} />
      </Container>
      <Container>
        <div className="home-playlist-swiper-container">
          <div className="home-playlist-swiper-title">
            <h5>
              Tracks <i className="fas fa-music"></i>
            </h5>
          </div>
          <div>
            <p>Here are the most recently liked tracks from the users.</p>
          </div>
        </div>
        <TrackSwiper tracks={tracks} />
      </Container>
    </>
  );
}
