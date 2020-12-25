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
    effect: "coverflow",
    grabCursor: true,
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
      clickable: true,
    },
  };

  return (
    <div>
      <Swiper {...params} rebuildOnUpdate={true}>
        {props.playlists.map((playlist, index) => (
          <div key={index} style={{ width: 200, height: 200 }}>
            <Playlist
              playlist_id={playlist.spotify_id}
              name={playlist.name}
              cover_url={playlist.cover_url}
              notify={notify}
            />
          </div>
        ))}
      </Swiper>
      <ToastContainer />
    </div>
  );
}
