import React, { useState, useEffect } from "react";
import SongInput from "../songinput/SongInput";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileHeader from "../profileheader/ProfileHeader";
import "./Profile.css";
import SongBook from "../songbook/SongBook";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import ProfileControlBar from "../profilecontrolbar/ProfileControlBar";

export default function Profile(props) {
  const [username, setUsername] = useState("");
  const [songs, setSongs] = useState([]);
  const [key, setKey] = useState("liked-songs");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    axios.get("/users/current", { withCredentials: true }).then((res) => {
      console.log("current user");
      console.log(res.data["user"]);
      setUsername(res.data["user"]["username"]);
    });

    axios.get("/users/tracks", { withCredentials: true }).then((res) => {
      console.log(res.data["tracks"]);
      setSongs(res.data["tracks"]);
    });
  }, []);

  function handleSelect(event) {
    setKey(event);

    axios.get("/songs/liked-by?username=" + username).then((res) => {
      setSongs(res.data["songs"]);
    });
  }

  function showAlertCallBack() {
    setShowAlert(true);
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
        <ProfileHeader />
      </Container>
      <Container>
        <ProfileControlBar />
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
