import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import LogIn from "./pages/Login";
import Recipe from "./pages/Recipe";


function App() {
  return (
    <Router>
      <div className="App">
        <h1>BLOOM</h1>
        <button>
          <Link to="/login">Log In</Link>
        </button>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>

        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/recipe">
            <Recipe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
