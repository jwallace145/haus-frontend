import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Redirect from "react-router-dom/Redirect";

export default class Logout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.match.params.username,
      redirect: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log(this.state.username);
  }

  handleClick() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
      }),
    };

    fetch("http://127.0.0.1:5000/logout", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    this.setState({ redirect: true });
  }

  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
  }

  render() {
    return (
      <>
        {this.renderRedirect()}
        <Container>
          <h1>Logout {this.state.username}</h1>
        </Container>
        <Container>
          <Button variant="outline-dark" onClick={this.handleClick}>
            Log out
          </Button>
        </Container>
      </>
    );
  }
}
