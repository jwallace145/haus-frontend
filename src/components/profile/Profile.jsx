import React, { useState, useEffect } from "react";
import SongInput from "../songinput/SongInput";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileHeader from "../profileheader/ProfileHeader";
import ProfileUpdate from "../profileupdate/ProfileUpdate";
import "./Profile.css";
import Button from "react-bootstrap/Button";
import SongBook from "../songbook/SongBook";
import Alert from "react-bootstrap/Alert";

export default function Profile(props) {
  const [username, setUsername] = useState(props.match.params.username);
  const [songs, setSongs] = useState([]);
  const [key, setKey] = useState("liked-songs");
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/songs?username=" + username)
      .then((response) => response.json())
      .then((data) => {
        setSongs(data["songs"]);
      });
  }, [username]);

  function handleSelect(event) {
    setKey(event);

    fetch("http://127.0.0.1:5000/songs?username=" + username)
      .then((response) => response.json())
      .then((data) => {
        setSongs(data["songs"]);
      });
  }

  function showAlertCallBack() {
    setShowAlert(true);
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

  let alert;
  if (showAlert) {
    alert = (
      <div className="alert-container">
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
          className="alert-message"
        >
          <Alert.Heading>Song successfully added!</Alert.Heading>
        </Alert>
      </div>
    );
  }

  return (
    <>
      {alert}
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
                  <SongBook songs={songs} pageSize={6} />
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="song-input" title="Song Input">
            <div className="sidebar">
              <SongInput
                username={username}
                alertCallBack={showAlertCallBack}
              />
            </div>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}
