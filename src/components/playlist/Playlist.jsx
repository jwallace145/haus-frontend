import React from "react";
import axios from "axios";
import "swiper/css/swiper.css";

export default function Playlist(props) {
  function handleClick(event) {
    event.preventDefault();

    axios
      .get("/spotify/playlists/" + props.playlist_id, { withCredentials: true })
      .then((res) => {
        console.log(res.data["tracks"]);
      });

    props.notify(props.name);
  }

  return (
    <button
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
