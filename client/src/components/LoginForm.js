import React from "react";
import API from "../utils/user.api";
import { useForm } from "react-hook-form";
import "./form.css";
import { withRouter } from "react-router-dom";

const bcrypt = require("bcryptjs");

const LogInForm = props => {
  const { register, handleSubmit, errors } = useForm();
  const submitForm = data => {
    API.getUser()
      .then(res => {
        const results = res.data;

        results.forEach(result => {
          if (
            (data.email === result.email) &
            bcrypt.compareSync(data.password, result.password)
          ) {
            //need to add code
            console.log(result);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  const onSubmit = data => {
    submitForm(data);
  };

  return (
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
  );
};

export default withRouter(LogInForm);
