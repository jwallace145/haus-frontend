import React from "react";
import Swiper from "react-id-swiper";
import Playlist from "../playlist/Playlist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PlaylistSwiper(props) {
  const notify = (name) => {
    toast.success("Playlist " + name + " consumed");
  };

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
    <div>
      <Swiper {...params} rebuildOnUpdate={true} shouldSwiperUpdate={true}>
        {props.playlists &&
          props.playlists.map((playlist, index) => (
            <div key={index} style={{ width: 200, height: 200 }}>
              <Playlist
                playlist_id={playlist.id}
                name={playlist.name}
                cover_url={playlist.cover_url}
                notify={notify}
                callback={props.playlistCallback}
              />
            </div>
          ))}
      </Swiper>
      <ToastContainer />
    </div>
  );
}
