import React from "react";
import API from "../utils/user.api";
import { useForm } from "react-hook-form";

export default function ForgotPassword() {
  const { register, handleSubmit, errors } = useForm();
  const submitForm = (data) => {
    console.log(data);
    API.findUser(data.email)
      .then((res) => {
        console.log(
          new Date(res.data.dateofBirth) === new Date(data.dateofBirth)
        );
        console.log(res);
        if (new Date(data.dateofBirth) === new Date(res.data.dateofBirth)) {
          console.log(res);
        } else console.log("no match");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onSubmit = (data) => {
    submitForm(data);
  };
  return (
    <div>
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
        <button>Log In</button>
      </form>
    </div>
  );
}
