import React, { useState, useEffect } from "react";
import Playlist from "../playlist/Playlist";
import "./PlaylistBook.css";
import Button from "react-bootstrap/Button";

export default function PlaylistBook(props) {
  const [page, setPage] = useState(0);

  return (
    <>
      <div className="sidebar wrapper">
        {props.playlists.slice(page, page + props.pageSize).map((playlist) => (
          <Playlist
            spotify_id={playlist.spotify_id}
            name={playlist.name}
            cover_url={playlist.cover_url}
          />
        ))}
      </div>
      <div className="page-buttons">
        <Button variant="dark" onClick={(e) => setPage(page - props.pageSize)}>
          Previous Page
        </Button>
        <Button variant="dark" onClick={(e) => setPage(page + props.pageSize)}>
          Next Page
        </Button>
      </div>
    </>
  );
}
