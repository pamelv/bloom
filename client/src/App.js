import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import LogIn from "./pages/Login";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>BLOOM</h1>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/userprofile" component={UserProfile} />
      </div>
    </Router>
  );
}

export default App;
