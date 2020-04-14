import React from "react";
import { useForm } from "react-hook-form";
import API from "../utils/user.api";
import "./form.css";
import history from "../history";
import ReactDOM from "react-dom";

export default function SignUpForm() {
  const { register, handleSubmit, errors } = useForm();
  const submitForm = (data) => {
    API.addUser(data)
      .then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        history.push("/welcome");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        userExist();
      });
  };
  const onSubmit = (data) => {
    console.log(data);
    submitForm(data);
  };
  const userExist = (props) => {
    ReactDOM.render(
      <h4>A user with this email already exist. Please try to login.</h4>,
      document.getElementById("msg")
    );
  };
  return (
    <div>
      <div id="msg"></div>
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
          type="email"
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
          ref={register({
            required: true,
            minLength: 6,
            pattern: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/i,
          })}
        />
        {errors.password && (
          <p>
            Password must have 8 characters and contain at least: one upper case
            letter, one lower case letter, one numerical digit, one special
            character.
          </p>
        )}
        <label>Date of Birth</label>
        <input
          type="date"
          placeholder="Date of Birth"
          name="dateofBirth"
          ref={register({ required: true })}
        />
        {errors.dateofBirth && <p>This field is required</p>}
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
    </div>
  );
}
