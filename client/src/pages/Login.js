import React from "react";
import LogInForm from "../components/LoginForm";
import history from "../history";

export default function LogIn() {
  const forgotPassword = () => {
    history.push("./forgotpassword");
  };

  return (
    <div>
      <LogInForm />
      <button onClick={forgotPassword}>Forgot Password</button>
    </div>
  );
}