import React from "react";
import Swiper from "react-id-swiper";
import Playlist from "../playlist/Playlist";

export default function PlaylistSwipe(props) {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };

  return (
    <Swiper {...params} rebuildOnUpdate={true}>
      {props.playlists.map((playlist, index) => (
        <div style={{ width: 200, height: 200 }}>
          <Playlist name={playlist.name} cover_url={playlist.cover_url} />
        </div>
      ))}
    </Swiper>
  );
}
