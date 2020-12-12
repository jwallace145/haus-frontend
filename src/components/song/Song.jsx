import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

function Song(props) {
  return (
    <Card bg="light">
      <Card.Header>
        <Card.Title>
          {props.title} - {props.artist}
        </Card.Title>
        <Card.Subtitle>{props.album}</Card.Subtitle>
      </Card.Header>
      <Card.Img className="photo" src={props.imgsrc} />
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item variant="dark">user: test user</ListGroup.Item>
          <ListGroup.Item variant="dark">
            number of likes: {props.likes}
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            created on: {props.created_on}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Song;

// export default class Song extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//     };
//   }

//   componentDidMount() {
//     fetch("http://127.0.0.1:5000/users?user_id=" + this.props.userid)
//       .then((response) => response.json())
//       .then((user) => this.setState({ username: user["username"] }));
//   }

//   render() {
//     return (
//       <Card bg="light">
//         <Card.Header>
//           <Card.Title>
//             {this.props.title} - {this.props.artist}
//           </Card.Title>
//           <Card.Subtitle>{this.props.album}</Card.Subtitle>
//         </Card.Header>
//         <Card.Img className="photo" src="bbking.jpg" />
//         <Card.Body>
//           <ListGroup variant="flush">
//             <ListGroup.Item variant="dark">
//               user: {this.state.username}
//             </ListGroup.Item>
//             <ListGroup.Item variant="dark">
//               created on: {this.props.created_on}
//             </ListGroup.Item>
//           </ListGroup>
//         </Card.Body>
//       </Card>
//     );
//   }
// }
