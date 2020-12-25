import React from "react";
import Rating from "@material-ui/lab/Rating";
import "swiper/css/swiper.css";

export default function Track(props) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${props.track.cover_url})`,
          width: 200,
          height: 200,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <Rating />
    </>
  );
}
