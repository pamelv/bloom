import React from "react";
import LogInForm from "../components/LoginForm";

export default function LogIn() {
  return (
    <div>
      <LogInForm />
      <button>
        <a href="/forgotpassword">Forgot Password</a>
      </button>
    </div>
  );
}
