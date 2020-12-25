import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import ProfileHeader from "../profileheader/ProfileHeader";
import axios from "axios";
import ProfileControlBar from "../profilecontrolbar/ProfileControlBar";
import PlaylistSwiper from "../playlistswiper/PlaylistSwiper";
import TrackSwiper from "../trackswiper/TrackSwiper";

export default function Profile(props) {
  const [user, setUser] = useState();
  const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get("/users/current", { withCredentials: true }).then((res) => {
      setUser(res.data["user"]);
    });

    axios.get("/users/tracks", { withCredentials: true }).then((res) => {
      setTracks(res.data["tracks"]);
    });

    axios.get("/spotify/playlists", { withCredentials: true }).then((res) => {
      setPlaylists(res.data["playlists"]);
    });
  }, []);

  return (
    <>
      <Container>
        <ProfileHeader user={user} />
      </Container>
      <Container>
        <ProfileControlBar />
      </Container>
      <Container>
        <PlaylistSwiper playlists={playlists} />
      </Container>
      <Container>
        <TrackSwiper tracks={tracks} />
      </Container>
    </>
  );
}
