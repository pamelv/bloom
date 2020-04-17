import React from "react";
import history from "../history";
import Grid from "@material-ui/core/Grid";
import splash from "../img/bloom-splash.gif";
import "./Home.css";
const splashstyle = {
  width: "80vw",
  position: "absolute",
  left: "10%",
  top: "30%",
};
const loginDiv = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  textAlign: "center",
  opacity: 0,
};
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
        <div id="axis">
          <img
            id="splash-animation"
            src={splash}
            alt=""
            style={splashstyle}
            className="moveup"
          />
        </div>
        <div className="loginDiv" style={loginDiv}>
          <Grid>
            <button style={{ display: "inline-block" }} onClick={this.logIn}>
              Log In
            </button>
          </Grid>
          <Grid>
            <button
              style={{ display: "inline-block" }}
              id="signup"
              onClick={this.signUp}
            >
              Sign Up
            </button>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
