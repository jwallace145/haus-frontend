import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/profile/Profile";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Logout from "./components/logout/Logout";
import "./App.css";
import { Component } from "react";
import Search from "./components/search/Search";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path="/register" component={Register} />
          <Route path='/logout' component={Logout} />
          <Route path='/search' component={Search} />
        </Switch>
      </Router>
    );
  }
}
