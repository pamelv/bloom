import React from "react";

import { Router, Route } from "react-router-dom";
import history from "./history";
import Signup from "./pages/Signup";
import LogIn from "./pages/Login";
import Recipe from "./pages/Recipe";
import Poem from "./pages/Poem";
import Playlist from "./pages/Playlist";
import Podcast from "./pages/Podcast";
import Quote from "./pages/Quote";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import Dashboard from "./pages/Dashboard";
import LogOut from "./components/Logoutbutton";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <LogOut />
        <h1>
          <a href="/">BLOOM</a>
        </h1>

        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/newpassword" component={NewPassword} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/recipe" component={Recipe} />
        <Route exact path="/playlist" component={Playlist} />
        <Route exact path="/podcast" component={Podcast} />
        <Route exact path="/poem/happy" component={Poem} />
        <Route exact path="quote" component={Quote} />
      </div>
    </Router>
  );
}

export default App;
