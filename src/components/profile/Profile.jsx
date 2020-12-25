import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import ProfileHeader from "../profileheader/ProfileHeader";
import axios from "axios";
import ProfileControlBar from "../profilecontrolbar/ProfileControlBar";
import PlaylistSwiper from "../playlistswiper/PlaylistSwiper";
import TrackSwiper from "../trackswiper/TrackSwiper";
import "./Profile.css";

export default function Profile(props) {
  const [user, setUser] = useState();
  const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get("/users/current", { withCredentials: true }).then((res) => {
      setUser(res.data["user"]);
    });

    axios.get("/users/tracks", { withCredentials: true }).then((res) => {
      console.log(res.data["tracks"]);
      setTracks(res.data["tracks"]);
    });

    axios.get("/users/playlists", { withCredentials: true }).then((res) => {
      setPlaylists(res.data["playlists"]);
    });
  }, []);

  return (
    <>
      <Container>
        <ProfileHeader user={user} />
      </Container>
      <Container>
        <ProfileControlBar user={user} />
      </Container>
      <Container>
        <div className="playlist-swiper-title-container">
          <h5>
            <i class="fab fa-spotify"></i> Spotify Playlists
          </h5>
          <p>
            Click on your Spotify playlists here to save them to your profile!
          </p>
        </div>
        <PlaylistSwiper playlists={playlists} />
      </Container>
      <Container>
        <div className="track-swiper-title-container">
          <h5>
            <i class="fab fa-spotify"></i> Spotify Tracks
          </h5>
          <p>
            Here are your Spotify tracks used by HAUS{" "}
            <i class="fas fa-headphones-alt"></i> to intelligently recommend new
            music. Update your track ratings to fine tune the performance!
          </p>
        </div>
        <TrackSwiper tracks={tracks} />
      </Container>
    </>
  );
}
