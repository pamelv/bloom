import React from "react";
import API from "../utils/user.api";
import { useForm } from "react-hook-form";
import "./form.css";
import history from "../history";
import ReactDOM from "react-dom";

const LogInForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const submitForm = (data) => {
    API.getToken(data)
      .then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        history.push("/profile");
        window.location.reload();
      })
      .catch((error) => {
        if (error === 500) {
          var user = "No user";
        }
        errorMsg(user);
      });
  };
  const onSubmit = (data) => {
    submitForm(data);
  };

  const errorMsg = (props) => {
    if (props === "No user") {
      ReactDOM.render(
        <h4>
          No existing user with email entered. Please{" "}
          <a href="/signup">sign up</a> for an account.
        </h4>,
        document.getElementById("msg")
      );
    } else if (props === undefined) {
      ReactDOM.render(
        <h4>Invalid password entered, please try again.</h4>,
        document.getElementById("msg")
      );
    }
  };

  return (
    <div>
      <div id="msg"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>Invalid email</p>}
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ required: true, minLength: 6 })}
        />
        {errors.password && <p>Invalid password</p>}
        <button>Log In</button>
      </form>
    </div>
  );
};

export default LogInForm;
