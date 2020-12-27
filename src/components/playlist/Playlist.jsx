import React from "react";
import axios from "axios";
import "swiper/css/swiper.css";

export default function Playlist(props) {
  return (
    <div
      value={props.playlist_id}
      style={{
        backgroundImage: `url(${props.cover_url})`,
        width: 200,
        height: 200,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></div>
  );
}
