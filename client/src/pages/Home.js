import React from "react";
import history from "../history";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
    };
  }

  componentDidMount() {
    this.isLoggedIn();
  }

  logIn() {
    history.push("/login");
  }

  signUp() {
    history.push("/signup");
  }

  isLoggedIn() {
    // eslint-disable-next-line
    if (this.state.token == undefined) {
    } else history.push("/profile");
  }

  render() {
    return (
      <div>
        <button onClick={this.logIn}>Log In</button>
        <button id="signup" onClick={this.signUp}>
          Sign Up
        </button>
      </div>
    );
  }
}

export default App;
