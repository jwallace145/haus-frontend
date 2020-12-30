import React, { useState, useEffect } from "react";
import PlaylistSwiper from "../playlistswiper/PlaylistSwiper";
import TrackSwiper from "../trackswiper/TrackSwiper";
import Button from "react-bootstrap/Button";
import "./PlaylistIngest.css";
import axios from "axios";

export default function PlaylistIngest(props) {
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState({});

  useEffect(() => {
    axios.get("/users/playlists", { withCredentials: true }).then((res) => {
      setPlaylists(res.data["playlists"]);
      setCurrentPlaylist(res.data["playlists"][0]);

      axios
        .get("/playlists/" + res.data["playlists"][0]["id"] + "/tracks")
        .then((res) => {
          setTracks(res.data["tracks"]);
        });
    });
  }, []);

  function playlistSwiperCallback(playlist) {
    console.log("playlist ingest playlist swiper callback function");
    console.log(playlist);

    axios.get("/playlists/" + playlist + "/tracks").then((res) => {
      console.log("tracks for playlist with id " + playlist);
      console.log(res.data["tracks"]);
      console.log(res.data["playlist"]);
      setCurrentPlaylist(res.data["playlist"]);
      setTracks(res.data["tracks"]);
    });
  }

  function handleIngestPlaylist(event) {
    event.preventDefault();
  }

  return (
    <div className="playlist-ingest-container">
      <div className="playlist-swiper-container">
        <PlaylistSwiper
          playlists={playlists}
          playlistCallback={playlistSwiperCallback}
        />
      </div>
      <div className="current-playlist-container">{currentPlaylist.name}</div>
      <div className="track-swiper-container">
        <TrackSwiper tracks={tracks} />
      </div>
      <Button variant="light" block>
        INGEST PLAYLIST
      </Button>
    </div>
  );
}
