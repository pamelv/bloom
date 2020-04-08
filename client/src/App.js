import React from "react";

import { Router, Route } from "react-router-dom";
import history from "./history";
import Signup from "./pages/Signup";
import LogIn from "./pages/Login";
import Recipe from "./pages/Recipe";
import Poem from "./pages/Poem";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <h1>
          <a href="/">BLOOM</a>
        </h1>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/recipe" component={Recipe} />
        <Route exact path="/api/poem/happy" component={Poem} />
      </div>
    </Router>
  );
}

export default App;
