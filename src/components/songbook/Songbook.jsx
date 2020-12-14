import React, { useState, useEffect } from "react";
import Song from "../song/Song";
import "./SongBook.css";
import Button from "react-bootstrap/Button";

export default function SongBook(props) {
  const [page, setPage] = useState(0);

  return (
    <>
      <div className="sidebar wrapper">
        {props.songs.slice(page, page + props.pageSize).map((song) => (
          <Song
            key={song.id}
            title={song.title}
            artist={song.artist}
            album={song.album}
            likes={song.count}
            imgsrc={song.cover_url}
            created_on={song.created_on}
          />
        ))}
      </div>
      <div className="page-buttons">
        <Button
          variant="dark"
          onClick={(event) => setPage(page - props.pageSize)}
        >
          Previous Page
        </Button>
        <Button
          id="next-page"
          variant="dark"
          onClick={(event) => setPage(page + props.pageSize)}
        >
          Next Page
        </Button>
      </div>
    </>
  );
}
