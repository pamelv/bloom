import React from "react";
import LogInForm from "../components/LoginForm";
import history from "../history";
import pink from "../img/bloom_pink.gif";
import blue from "../img/blue.gif";
import orange from "../img/bloom_orange.gif";

export default function LogIn() {
  const forgotPassword = () => {
    history.push("./forgotpassword");
  };

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
        <button onClick={forgotPassword}>Forgot Password</button>
      </div>
    </div>
  );
}
