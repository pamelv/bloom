import React from "react";
import { useForm } from "react-hook-form";
import API from "../utils/user.api";

export default function AddMoodForm() {
  const id = localStorage.getItem("id");
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    API.addMood(id, data)
      .then((res) => {
        console.log(data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} name="moodForm">
      <input
        type="text"
        placeholder="I am feeling ..."
        name="emotion"
        ref={register({ required: true })}
      />
      {errors.emotion && <p>This field is required</p>}
      <label>Select an emoji:</label>
      <div className="flex">
        <input
          style={{ width: "auto" }}
          name="emoji"
          type="radio"
          // eslint-disable-next-line
          value="&#128513;"
          ref={register({ required: true })}
        />
        <h2>&#128513;</h2>
        <input
          style={{ width: "auto" }}
          name="emoji"
          type="radio"
          // eslint-disable-next-line
          value="&#128528;"
          ref={register({ required: true })}
        />
        <h2>&#128528;</h2>
        <input
          style={{ width: "auto" }}
          name="emoji"
          type="radio"
          // eslint-disable-next-line
          value="&#128577;"
          ref={register({ required: true })}
        />
        <h2>&#128577;</h2>
      </div>
      {errors.emoji && <p>This field is required</p>}
      <label>Comments:</label>
      <textarea name="comment" ref={register} />
      <input type="submit" />
    </form>
  );
}
