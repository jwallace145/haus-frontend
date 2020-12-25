import React from "react";
import Track from "../track/Track";
import Swiper from "react-id-swiper";

export default function TrackSwiper(props) {
  const params = {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <Swiper {...params} rebuildOnUpdate={true}>
      {props.tracks.map((track, index) => (
        <div key={index}>
          <Track track={track} />
        </div>
      ))}
    </Swiper>
  );
}
