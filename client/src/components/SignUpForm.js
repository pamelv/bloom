import React from "react";
import { useForm } from "react-hook-form";
import API from "../utils/user.api";
import "./form.css";
import history from "../history";
import ReactDOM from "react-dom";

const radioStyle = {
  fontSize: "1.2em",
  marginLeft: "5px",
  marginRight: "10px",
};

export default function SignUpForm(props) {
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
      <h5>
        A user with this email already exist. Please try to{" "}
        <a href="/login">login</a>.
      </h5>,
      document.getElementById("msg")
    );
  };
  return (
    <div className={props.className}>
      <div id="msg"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          name="firstname"
          id="firstname"
          ref={register({ required: true, maxLength: 80 })}
        />
        <label htmlFor="firstname">First Name</label>
        {errors.firstname && <p>This field is required</p>}
        <input
          type="text"
          placeholder="Last name"
          name="lastname"
          id="lastname"
          ref={register({ required: true, maxLength: 100 })}
        />
        <label htmlFor="lastname">Last Name</label>
        {errors.lastname && <p>This field is required</p>}

        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <label htmlFor="email">Email</label>
        {errors.email && <p>This field is required</p>}

        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          ref={register({
            required: true,
            minLength: 6,
            pattern: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/i,
          })}
        />
        <label htmlFor="password">Password</label>
        {errors.password && (
          <p className="error">
            Password must have 8 characters and contain at least: one upper case
            letter, one lower case letter, one numerical digit, one special
            character.
          </p>
        )}

        <input
          type="date"
          placeholder="Date of Birth"
          name="dateofBirth"
          id="dateofBirth"
          ref={register({ required: true })}
        />
        <label htmlFor="dateofBirth">Date of Birth</label>
        {errors.dateofBirth && <p>This field is required</p>}

        <div className="flex">
          <input
            name="gender"
            id="male"
            type="radio"
            value="Male"
            ref={register}
          />
          <h5 style={radioStyle}>Male</h5>

          <input
            name="gender"
            id="female"
            type="radio"
            value=" Female"
            ref={register}
          />
          <h5 style={radioStyle}>Female</h5>
          <input
            name="gender"
            id="other"
            type="radio"
            value=" Other"
            ref={register}
          />
          <h5 style={radioStyle}>Other</h5>
        </div>
        <label htmlFor="gender">Gender</label>
        <input type="submit" />
      </form>
    </div>
  );
}
