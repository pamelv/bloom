import React from "react";
import API from "../utils/user.api";
import { useForm } from "react-hook-form";
import ReactDOM from "react-dom";

export default function ForgotPassword(props) {
  var id = localStorage.getItem("id");
  const { register, handleSubmit, errors } = useForm();
  const submitForm = (data) => {
    if (data.password === data.confirmPassword) {
      API.updatePw(id, data)
        .then((res) => {
          console.log("EURIKA");
          success();
        })
        .catch((error) => {
          console.log(error);
        });
    } else noMatch();
  };

  const onSubmit = (data) => {
    submitForm(data);
  };

  const noMatch = (props) => {
    ReactDOM.render(
      <h4>The passwords enter do not match, please try again.</h4>,
      document.getElementById("no-match")
    );
  };

  const success = (props) => {
    ReactDOM.render(
      <h4>Your password has been updated. Press the Login button to Login.</h4>,
      document.getElementById("msg")
    );
    ReactDOM.render(
      <button>
        <a href="/login">Login</a>
      </button>,
      document.getElementById("login-btn")
    );
    ReactDOM.render("", document.getElementById("no-match"));
  };

  return (
    <div>
      <div id="no-match"></div>
      <div id="msg"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="password"
          placeholder="New password"
          name="password"
          ref={register({
            required: true,
            minLength: 6,
            pattern: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/i,
          })}
        />
        <label htmlFor="password">Enter new password</label>
        {errors.password && (
          <p className="error">
            Password must have 8 characters and contain at least: one upper case
            letter, one lower case letter, one numerical digit, one special
            character.
          </p>
        )}

        <input
          type="password"
          placeholder="Confirm new password"
          name="confirmPassword"
          ref={register({
            required: true,
            minLength: 6,
            pattern: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/i,
          })}
        />
        <label htmlFor="confirmPassword">Confirm new password</label>
        {errors.dateofBirth && <p>Invalid entry</p>}
        <div className="flex">
          <button>Submit</button> <div id="login-btn"></div>
        </div>
      </form>
    </div>
  );
}
