import React from "react";
import API from "../utils/user.api";
import { useForm } from "react-hook-form";
import "./form.css";
import history from "../history";
import ReactDOM from "react-dom";

const bcrypt = require("bcryptjs");

const LogInForm = props => {
  const { register, handleSubmit, errors } = useForm();
  const submitForm = data => {
    console.log(data);
    API.findUser(data.email)
      .then(res => {
        if (
          (data.email === res.data.email) &
          bcrypt.compareSync(data.password, res.data.password)
        ) {
          console.log(res);
          history.push("/profile");
        } else console.warn("invalid credentials");
        invalidPassword();
      })
      .catch(error => {
        console.log(error);
        userDoesNotExist();
      });
  };
  const onSubmit = data => {
    submitForm(data);
  };

  const invalidPassword = props => {
    ReactDOM.render(
      <h4>Invalid password entered, please try again.</h4>,
      document.getElementById("msg")
    );
  };

  const userDoesNotExist = props => {
    ReactDOM.render(
      <h4>
        No existing user with email entered. Please sign up for an account.
      </h4>,
      document.getElementById("msg")
    );
  };

  return (
    <div>
      <div id="msg"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="text"
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
          ref={register({ required: true, min: 6 })}
        />
        {errors.password && <p>Invalid password</p>}
        <button>Log In</button>
      </form>
    </div>
  );
};

export default LogInForm;
