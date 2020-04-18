import React, { Component } from "react";
import API from "../utils/exercise.api";
import history from "../history";
import Parser from "html-react-parser";

export default class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      id: localStorage.getItem("id"),
      currentMood: localStorage.getItem("current_mood"),
      exercises: [],
    };
  }

  componentDidMount() {
    this.loggedIn();
    API.getExercise()
      .then((response) => {
        this.setState({
          exercises: response.data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleFormSave = (exercise) => {
    API.saveExercise(
      this.state.id,
      exercise,
      this.state.token
    ).then((response) => {});
  };

  loggedIn() {
    // eslint-disable-next-line
    if (this.state.token == undefined) {
      history.push("/login");
    }
  }

  render() {
    return (
      <div>
        <h5 className="text-center my-5">
          DAILY EXERCISES CURATED JUST FOR YOU
        </h5>

        <div>
          {this.state.exercises.map((exercise) => {
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
                      onClick={() => {
                        this.handleFormSave(exercise);
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
      </div>
    );
  }
}
