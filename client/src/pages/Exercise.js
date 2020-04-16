import React, { Component } from "react";
import API from "../utils/exercise.api";
import ExerciseForm from "../components/ExerciseForm";
import history from "../history";


export default class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      currentMood: localStorage.getItem("current_mood"),
      exercises: [],
    };
  }

  componentDidMount() {
    this.loggedIn();

    if (this.state.currentMood === "Happy") {
      API.getExercise()
        .then((response) => {
          console.log("exercises:", response.data.results);
          this.setState({
            exercises: response.data.results
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (this.state.currentMood === "Bleh") {
      API.getExercise()
        .then((response) => {
          console.log("exercise:", response.data.results);
          this.setState({
            exercises: response.data.results,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (this.state.currentMood === "Sad") {
      API.getExercise()
        .then((response) => {
          console.log("exercise:", response.data.results);
          this.setState({
            exercises: response.data.results,
          });
        })
        .catch((error) => {
          console.log(error);
        });


    } else console.log("no mood available");
  }

  handleFormSave = (exercise) => {
    API.saveExercise(exercise).then((response) => {
      console.log("success!");
    });
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
        <div>
        <h5 className="text-center my-5">DAILY EXERCISES CURATED JUST FOR YOU</h5>
        <ExerciseForm
          exercises={this.state.exercises}
          handleFormSave={this.handleFormSave}
        />
        </div>
      </div>
    );
  }
}
