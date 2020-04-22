import React, { Component } from "react";
import API from "../utils/exercise.api";
import history from "../history";
import Navbar from "../components/Navbar";
import ExerciseCard from "../components/ExerciseCard";
import Parser from "html-react-parser";
import CategoryNavigation from "../components/CategoryNavigation";
import Loader from "react-loader-spinner";
import toaster from "toasted-notes";

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
    this.showResults();
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
  showResults() {
    setTimeout(
      function () {
        this.setState({ showResults: true });
      }.bind(this),
      3000
    );
  }

  handleFormSave = (exercise) => {
    API.saveExercise(exercise, this.state.token).then((response) => {});
  };

  loggedIn() {
    // eslint-disable-next-line
    if (this.state.token == undefined) {
      history.push("/login");
    }
  }

  render() {
    const showResults = this.state.showResults;
    return (
      <div
        style={{
          margin: "0px",
          padding: "0px",
          width: "100vw",
          position: "relative",
          background:
            "linear-gradient(351deg, rgba(200,123,148,1) 0%, rgba(156,206,213,1) 50%, rgba(251,168,134,1) 100%)",
          backgroundSize: "cover",
        }}
      >
        <div style={{ width: "100%", boxSizing: "border-box" }}>
          <Navbar title="Exercise" currentMood={this.state.currentMood} />
          <div
            style={{
              columnCount: "1",
              columnGap: "1em",
              padding: "0.7em",
              height: "100%",
              paddingBottom: "55px",
              paddingTop: "65px",
            }}
          >
            <div
              className={showResults ? "hide" : "show"}
              style={{
                top: "50%",
                position: "fixed",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <Loader
                type="Circles"
                color="#FFB383"
                height={80}
                width={80}
                timeout={3000} //3 secs
              />
            </div>
            <div id="results" className={showResults ? "show" : "hide"}>
              {this.state.exercises.map((exercise) => (
                <div className="s12" value="mood" key={exercise.title}>
                  <ExerciseCard
                    id={exercise.id}
                    name={exercise.name}
                    category={exercise.category.name}
                    equipment={exercise.equipment[0].name}
                    description={Parser(exercise.description)}
                    onClick={() => {
                      this.handleFormSave(exercise);
                      toaster.notify("Bookmark saved!", {
                        position: "bottom",
                        duration: 2000,
                      });
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <CategoryNavigation currentPage="exercise" />
        </div>
      </div>

      // {/* <div>
      //   {this.state.exercises.map((exercise) => {
      //     return (
      //       <div
      //         className="card text-center mx-auto shadow-lg p-3 mb-5 bg-white rounded-lg"
      //         key={exercise.name}
      //       >
      //         <div className="card-body">
      //           <div key={exercise.id}>
      //             <h5
      //               className="title mb-4"
      //               style={{ textTransform: "uppercase" }}
      //             >
      //               <b>{exercise.name}</b>
      //             </h5>

      //             <div className="my-3">
      //               <h6>Target Muscle: {exercise.category.name}</h6>
      //               <h6>Required Equipment: {exercise.equipment[0].name}</h6>
      //             </div>

      //             <div className="my-4">
      //               WORKOUT: {Parser(exercise.description)}
      //             </div>

      //             <button
      //               type="submit"
      //               className="m-auto"
      //               onClick={() => {
      //                 this.handleFormSave(exercise);
      //               }}
      //             >
      //               BOOKMARK
      //             </button>
      //           </div>
      //         </div>
      //       </div>
      //     );
      //   })} */}
      // {/* </div> */}
    );
  }
}
