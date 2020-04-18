import React from "react";
import LogInForm from "../components/LoginForm";
import history from "../history";
import pink from "../img/bloom_pink.gif";
import blue from "../img/blue.gif";
import orange from "../img/bloom_orange.gif";

// const forgotPassword = () => {
//   history.push("./forgotpassword");
// };

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
    };
  }
  forgotPassword() {
    history.push("./forgotpassword");
  }
  signUp() {
    history.push("/signup");
  }
  render() {
    return (
      <div>
        <div
          style={{
            width: "60%",
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <img style={{ width: "20vw" }} src={pink} alt="Bloom" />
          <img style={{ width: "20vw" }} src={blue} alt="Bloom" />
          <img style={{ width: "20vw" }} src={orange} alt="Bloom" />
        </div>
        <div
          style={{
            width: "70VW",
            position: "absolute",
            top: "55%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <LogInForm />
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <button onClick={this.forgotPassword}>Forgot Password</button>
            <button
              style={{ display: "inline-block" }}
              id="signup"
              onClick={this.signUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default LogIn;
