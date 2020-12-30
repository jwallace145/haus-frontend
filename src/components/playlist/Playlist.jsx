import React from "react";
import axios from "axios";
import "swiper/css/swiper.css";
import "./Playlist.css";

export default function Playlist(props) {
  function handleClick(event) {
    event.preventDefault();

    console.log("playlist id clicked");
    console.log(event.target.value);

    props.callback(event.target.value);
  }

  return (
    <button
      className="playlist-container-unique"
      value={props.playlist_id}
      onClick={handleClick}
      style={{
        backgroundImage: `url(${props.cover_url})`,
        width: 200,
        height: 200,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></button>
  );
}
