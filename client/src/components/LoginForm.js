import React from "react";
import { useForm } from "react-hook-form";

import "./form.css";

export default function SignUpForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
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
}
