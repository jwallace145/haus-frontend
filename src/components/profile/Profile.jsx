import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import SongIntake from "../songintake/SongIntake";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Song from "../song/Song";

export default function Profile(props) {
  const [username, setUsername] = useState(props.match.params.username);
  const [songs, setSongs] = useState([]);
  const [page, setPage] = useState("liked songs");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/songs?username=" + username)
      .then((response) => response.json())
      .then((songsList) => {
        console.log(songsList["songs"]);
        setSongs(songsList["songs"]);
      });
  });

  function handleClick(event) {
    event.preventDefault();

    fetch("http://127.0.0.1:5000/songs?username" + username)
      .then((response) => response.json())
      .then((songsList) => {
        setSongs(songsList["songs"]);
      });

    if (event.target.value === "liked-songs") {
      setPage("liked songs");
    } else if (event.target.value === "input-songs") {
      setPage("input song");
    }
  }

  let profile_page;
  if (page === "input song") {
    profile_page = (
      <>
        <h1>Song Input</h1>
        <SongIntake username={username} />
      </>
    );
  } else if (page === "liked songs") {
    profile_page = songs.map((song) => (
      <Song
        key={song.id}
        title={song.title}
        artist={song.artist}
        album={song.album}
        created_on={song.created_on}
        imgsrc={song.cover_url}
        likes={song.likes}
      />
    ));
  }

  return (
    <>
      <Container>
        <h1>{username}</h1>
        <img src="https://jwalls-fun-bucket.s3.amazonaws.com/album-covers/led-zepplin-IV.jpg" />
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="sidebar">
              <ButtonGroup vertical>
                <Button
                  variant="dark"
                  value="liked-songs"
                  onClick={handleClick}
                >
                  Liked Songs
                </Button>
                <Button
                  variant="dark"
                  value="input-songs"
                  onClick={handleClick}
                >
                  Input Song
                </Button>
              </ButtonGroup>
            </div>
          </Col>
          <Col xs={10}>
            <div className="sidebar">{profile_page}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
