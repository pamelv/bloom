import React from "react";
import history from "../history";

class LogOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.hasToken();
  }

  hasToken() {
    if (this.state.token !== null) {
      this.setState({ isLoggedIn: true });
    }
  }

  clearToken() {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <button
        onClick={this.clearToken}
        style={{ float: "right", display: isLoggedIn ? "block" : "none" }}
      >
        Log Out
      </button>
    );
  }
}

export default LogOut;
