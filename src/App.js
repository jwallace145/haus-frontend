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
        <Route path='/songintake' component={SongIntake} />
        <Route path='/login' component={Login} />
        <Route path='/profile/:username' component={Profile} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path="/register" component={Register} />
        <Route path='/logout/:username' component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
