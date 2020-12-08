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

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/songintake'>
          <SongIntake />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
