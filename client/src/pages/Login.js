import React from "react";
import LogInForm from "../components/LoginForm";
import history from "../history";
import pink from "../img/bloom_pink.gif";
import blue from "../img/blue.gif";
import orange from "../img/bloom_orange.gif";
import API from "../utils/user.api";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
    };
  }
  componentDidMount() {
    this.findUser();
  }

  findUser() {
    API.getUser(this.state.token)
      .then((res) => {
        if (res.status === 200) {
          history.push("./profile");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  forgotPassword() {
    history.push("./forgotpassword");
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
          <button onClick={this.forgotPassword}>Forgot Password</button>
        </div>
      </div>
    );
  }
}
export default LogIn;
