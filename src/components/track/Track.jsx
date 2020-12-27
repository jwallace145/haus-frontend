import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import "swiper/css/swiper.css";
import "./Track.css";
import axios from "axios";

export default function Track(props) {
  const [rating, setRating] = useState(props.track.rating);

  function handleRateTrack(event, newvalue) {
    const formdata = new FormData();
    formdata.append("rating", newvalue ? newvalue : 0);

    axios
      .post("/tracks/" + props.track.id + "/rate", formdata, {
        withCredentials: true,
      })
      .then((res) => {});

    setRating(newvalue);
  }

  return (
    <div className="track-container">
      <div className="track-title-container">{props.track.title}</div>
      <div
        style={{
          backgroundImage: `url(${props.track.cover_url})`,
          width: 150,
          height: 150,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: 10,
          margin: "auto",
          marginTop: 10,
        }}
      ></div>
      <div style={{ margin: "auto" }}>
        <Rating
          name={String(props.track.id)}
          value={rating}
          onChange={handleRateTrack}
        />
      </div>
    </div>
  );
}
