import React from "react";
import { useForm } from "react-hook-form";
import API from "../utils/user.api";

export default function AddMoodForm() {
  const id = localStorage.getItem("id");
  const { register, handleSubmit, errors } = useForm();
  const submitForm = data => {
    API.addMood(id)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const onSubmit = data => {
    submitForm(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="emotion"
          name="emotion"
          ref={register({ required: true })}
        />
        <input
          type="number"
          placeholder="emoji"
          name="emoji"
          ref={register({ required: true })}
        />
        <textarea name="comment" ref={register} />

        <input type="submit" />
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="I am feeling ..."
          name="emotion"
          ref={register({ required: true })}
        />
        {errors.emotion && <p>This field is required</p>}
        <label>Select an emoji:</label>
        <select name="emoji" ref={register({ required: true })}>
          <option value="1">=)</option>
          <option value="2">=|</option>
          <option value="3">=(</option>
        </select>
        {errors.empoji && <p>This field is required</p>}
        <label>Comments:</label>
        <textarea placeholder="" name="comment" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
