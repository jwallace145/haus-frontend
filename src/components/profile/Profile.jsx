import React, { useState, useEffect } from "react";
import SongInput from "../songinput/SongInput";
import Container from "react-bootstrap/Container";
import Song from "../song/Song";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileHeader from "../profileheader/ProfileHeader";
import ProfileUpdate from "../profileupdate/ProfileUpdate";
import "./Profile.css";
import Button from "react-bootstrap/Button";

export default function Profile(props) {
  const [username, setUsername] = useState(props.match.params.username);
  const [songs, setSongs] = useState([]);
  const [key, setKey] = useState("liked-songs");
  const [showProfileEdit, setShowProfileEdit] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/songs?username=" + username)
      .then((response) => response.json())
      .then((data) => {
        setSongs(data["songs"]);
      });
  }, []);

  function handleSelect(event) {
    setKey(event);

    fetch("http://127.0.0.1:5000/songs?username=" + username)
      .then((response) => response.json())
      .then((data) => {
        setSongs(data["songs"]);
      });
  }

  let profileEdit;
  if (!showProfileEdit) {
    profileEdit = <div></div>;
  } else if (showProfileEdit) {
    profileEdit = (
      <>
        <hr></hr>
        <ProfileUpdate username={username} />
      </>
    );
  }

  return (
    <>
      <Container>
        <ProfileHeader username={username} />
      </Container>
      <Container>
        <div className="profile-edit-container">
          <Button
            variant="dark"
            onClick={(event) => setShowProfileEdit(!showProfileEdit)}
          >
            Edit Profile
          </Button>
          {profileEdit}
        </div>
      </Container>
      <Container>
        <Tabs activeKey={key} onSelect={handleSelect}>
          <Tab eventKey="liked-songs" title="Liked Songs">
            <Container>
              <Row>
                <Col>
                  <div className="liked-songs">
                    <h1>Liked Songs</h1>
                    <div className="sidebar wrapper">
                      {songs.map((song) => (
                        <Song
                          key={song.id}
                          title={song.title}
                          artist={song.artist}
                          album={song.album}
                          likes={song.likes}
                          imgsrc={song.cover_url}
                          created_on={song.created_on}
                        />
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="song-input" title="Song Input">
            <div className="sidebar">
              <SongInput />
            </div>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}
