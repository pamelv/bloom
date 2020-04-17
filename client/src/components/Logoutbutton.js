import React from "react";
import history from "../history";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

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
      <ListItem
        button
        key="logout"
        onClick={this.clearToken}
        style={{ display: isLoggedIn ? "block" : "none" }}
      >
        <ListItemIcon style={{ float: "left" }}>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText style={{ float: "left" }}>Logout</ListItemText>
      </ListItem>
      // <button
      //   onClick={this.clearToken}
      //   style={{ display: isLoggedIn ? "block" : "none" }}
      //   // style={{ float: "right", display: isLoggedIn ? "block" : "none" }}
      // >
      //   Log Out
      // </button>
    );
  }
}

export default LogOut;
