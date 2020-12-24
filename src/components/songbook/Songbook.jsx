import React, { useState, useEffect } from "react";
import Song from "../song/Song";
import "./SongBook.css";
import Button from "react-bootstrap/Button";

export default function SongBook(props) {
  const [songs, setSongs] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setSongs(props.songs);
  }, [props.songs]);

  return (
    <>
      <div className="sidebar wrapper">
        {songs.slice(page, page + props.pageSize).map((song) => (
          <Song
            key={song.id}
            id={song.id}
            title={song.title}
            artist={song.artist}
            album={song.album}
            likes={song.likes}
            imgsrc={song.cover_url}
            created_on={song.created_on}
          />
        ))}
      </div>
      <div className="page-buttons">
        <Button
          id="previous-page"
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
