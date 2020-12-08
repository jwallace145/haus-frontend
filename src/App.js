import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import SongIntake from "./components/songintake/SongIntake";
import Profile from "./components/profile/Profile";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Logout from "./components/logout/Logout";
import "./App.css";
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "bob"
    }
  }

  callBack = (data) => {
    console.log('data: ' + data);
    this.setState({username: data});
  }

  render() {
    return (
      <Router>
        <Header username={this.state.username} />
        <Switch>
          <Route path='/songintake' component={SongIntake} />
          <Route path='/login' component={() => <Login appCallBack={this.callBack}/>} />
          <Route path='/profile/:username' component={Profile} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path="/register" component={Register} />
          <Route path='/logout/:username' component={Logout} />
        </Switch>
      </Router>
    );
  }
}
