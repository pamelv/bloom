import React from "react";
import { PromiseProvider } from "mongoose";
import { useForm } from "react-hook-form";
import axios from "axios";

import "./form.css";

export default function SignUpForm() {
  const { register, handleSubmit, errors } = useForm();
  const submitForm = data => {
    axios
      .post("http://localhost:3001/api/users", data)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const onSubmit = data => {
    console.log(data);
    submitForm(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
        type="text"
        placeholder="First name"
        name="firstname"
        ref={register({ required: true, maxLength: 80 })}
      />
      {errors.firstname && <p>This field is required</p>}
      <label>Last Name</label>
      <input
        type="text"
        placeholder="Last name"
        name="lastname"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.lastname && <p>This field is required</p>}
      <label>Email</label>
      <input
        type="text"
        placeholder="Email"
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p>This field is required</p>}
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
        ref={register({ required: true, min: 6 })}
      />
      {errors.password && <p>This field is required</p>}
      <label>Date of Birth</label>
      <input
        type="date"
        placeholder="Date of Birth"
        name="dateofBirth"
        ref={register}
      />
      <label>Gender</label>
      <div className="flex">
        <input
          name="gender"
          id="male"
          type="radio"
          value="Male"
          ref={register}
        />
        <h5>Male</h5>

        <input
          name="gender"
          id="female"
          type="radio"
          value=" Female"
          ref={register}
        />
        <h5>Female</h5>
        <input
          name="gender"
          id="other"
          type="radio"
          value=" Other"
          ref={register}
        />
        <h5>Other</h5>
      </div>
      <input type="submit" />
    </form>
  );
}
