import React from "react";
import { Link } from "react-router-dom";
import history from "../history";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
    };
  }

  componentDidMount() {
    this.loggedIn();
  }

  loggedIn() {
    // eslint-disable-next-line
    if (this.state.token == undefined) {
    } else history.push("/profile");
  }

  render() {
    return (
      <div>
        <button>
          <Link to="/login">Log In</Link>
        </button>
        <button id="signup">
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
    );
  }
}

export default App;
