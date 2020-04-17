import React from "react";
import Parser from "html-react-parser";

export default function ExerciseForm(props) {
  return (
    <div>
      {props.exercises.map((exercise) => {
        return (
          <div
            className="card text-center mx-auto shadow-lg p-3 mb-5 bg-white rounded-lg"
            key={exercise.name}
          >
            <div className="card-body">
              <div key={exercise.id}>
                <h5
                  className="title mb-4"
                  style={{ textTransform: "uppercase" }}
                >
                  <b>{exercise.name}</b>
                </h5>

                <div className="my-3">
                  <h6>Target Muscle: {exercise.category.name}</h6>
                  <h6>Required Equipment: {exercise.equipment[0].name}</h6>
                </div>

                <div className="my-4">
                  WORKOUT: {Parser(exercise.description)}
                </div>

                <button
                  type="submit"
                  className="m-auto"
                  onClick={(exercise) => {
                    props.handleFormSave(exercise);
                  }}
                >
                  BOOKMARK
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
