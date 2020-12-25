import React from "react";
import Rating from "@material-ui/lab/Rating";
import "swiper/css/swiper.css";
import "./Track.css";

export default function Track(props) {
  return (
    <div className="track-container">
      <div
        style={{
          backgroundImage: `url(${props.track.cover_url})`,
          width: 200,
          height: 200,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: 10,
          margin: "auto",
          marginTop: 3,
        }}
      ></div>
      <div style={{ margin: "auto" }}>
        <Rating defaultValue={5} />
      </div>
    </div>
  );
}
