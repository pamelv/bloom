import React from "react";
import ReactDOM from "react-dom";
import API from "../utils/user.api";
import { useForm } from "react-hook-form";
import history from "../history";

export default function ForgotPassword() {
  const { register, handleSubmit, errors } = useForm();
  const submitForm = (data) => {
    console.log(data);
    API.findUser(data.email)
      .then((res) => {
        if (
          (data.email === res.data.email) &
          (Date.parse(res.data.dateofBirth) === Date.parse(data.dateofBirth))
        ) {
          console.log(res);
          console.log("match");
          localStorage.setItem("id", res.data._id);
          history.push("/newpassword");
        } else noMatch();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onSubmit = (data) => {
    submitForm(data);
  };

  const noMatch = (props) => {
    ReactDOM.render(
      <h4>The email and date of birth entered does not match our records.</h4>,
      document.getElementById("msg")
    );
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
        <label>Date of Birth</label>
        <input
          type="date"
          name="dateofBirth"
          ref={register({ required: true })}
        />
        {errors.dateofBirth && <p>Invalid date</p>}
        <button>Next</button>
      </form>
    </div>
  );
}
