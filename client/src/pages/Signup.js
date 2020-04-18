import React from "react";
import SignupForm from "../components/SignUpForm";
import pink from "../img/bloom_pink.gif";
import blue from "../img/blue.gif";
import orange from "../img/bloom_orange.gif";
import history from "../history";

const infoDiv = {
  backgroundColor: "#ded6ce",
  padding: "10px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: "10px",
  minWidth: "300px",
  minHeight: "550px",
};

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMsg: true,
      showForm: false,
    };
  }

  componentDidMount() {
    this.hideMsg();
  }
  hideMsg() {
    setTimeout(
      function () {
        this.setState({ showMsg: false, showForm: true });
      }.bind(this),
      7000
    );
  }

  render() {
    const msgDisplay = this.state.showMsg;
    const formDisplay = this.state.showForm;
    const forgotPassword = () => {
      history.push("./forgotpassword");
    };
    const movetoLogin = () => {
      history.push("./login");
    };

    return (
      <div>
        <div
          className={msgDisplay ? "show" : "hide"}
          style={{
            margin: "0px",
            padding: "0px",
            width: "100vw",
            height: "100vh",
            background:
              "linear-gradient(351deg, rgba(200,123,148,1) 0%, rgba(156,206,213,1) 50%, rgba(251,168,134,1) 100%)",
          }}
        >
          <div style={infoDiv}>
            <div
              style={{
                width: "70%",
                position: "absolute",
                top: "15%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img style={{ width: "30%" }} src={pink} alt="Bloom" />
              <img style={{ width: "30%" }} src={blue} alt="Bloom" />
              <img style={{ width: "30%" }} src={orange} alt="Bloom" />
            </div>

            <h5
              style={{
                fontSize: "1.2em",
                margin: "30px",
                position: "absolute",
                top: "30%",
                lineHeight: 2,
                textAlign: "center",
              }}
            >
              Anxiety disorders develop from a complex set of risk factors,
              including genetics, brain chemistry, personality, and life events.
            </h5>
          </div>
        </div>
        <div className={formDisplay ? "show" : "hide"}>
          <div
            style={{
              width: "70%",
              position: "absolute",
              top: "10%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img style={{ width: "30%" }} src={pink} alt="Bloom" />
            <img style={{ width: "30%" }} src={blue} alt="Bloom" />
            <img style={{ width: "30%" }} src={orange} alt="Bloom" />
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
            <SignupForm />
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%,0%)",
                justifyContent: "space-between",
              }}
            >
              <button style={{ display: "inline-block" }} onClick={movetoLogin}>
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
