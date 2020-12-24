import React from "react";
import "swiper/css/swiper.css";

export default function Playlist(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.cover_url})`,
        width: 200,
        height: 200,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {props.name}
    </div>
  );
}
