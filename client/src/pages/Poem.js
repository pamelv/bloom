import React, { Component } from "react";
import API from "../utils/poem.api";
import PoemForm from "../components/PoemForm";
import history from "../history";
import Navbar from "../components/Navbar";
import CategoryNavigation from "../components/CategoryNavigation";
import Loader from "react-loader-spinner";

export default class Poem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      id: localStorage.getItem("id"),
      currentMood: localStorage.getItem("current_mood"),
      poems: [],
    };
  }

  componentDidMount() {
    this.showResults();
    this.loggedIn();

    if (this.state.currentMood === "Happy") {
      API.getPoemHappy()
        .then((response) => {
          console.log("poems:", response.data);
          this.setState({
            poems: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (this.state.currentMood === "Bleh") {
      API.getPoemBleh()
        .then((response) => {
          console.log("poems:", response.data);
          this.setState({
            poems: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (this.state.currentMood === "Sad") {
      API.getPoemSad()
        .then((response) => {
          console.log("poems:", response.data);
          this.setState({
            poems: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else console.log("no mood available");
  }

  showResults() {
    setTimeout(
      function () {
        this.setState({ showResults: true });
      }.bind(this),
      3000
    );
  }

  handleFormSave = (poem) => {
    API.savePoem(this.state.id, poem).then((response) => {
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
          <Navbar title="Poem" currentMood={this.state.currentMood} />
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
              style={{ top: "45%", position: "fixed", left: "40%" }}
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
              {this.state.poems.map((poem) => (
                <div className="s12" value="mood" key={poem.title}>
                  <PoemForm
                    title={poem.title}
                    lines={poem.lines}
                    author={poem.author}
                    handleFormSave={this.handleFormSave}
                  />
                </div>
              ))}
            </div>
          </div>
          <CategoryNavigation currentPage="poem" />
        </div>
      </div>
    );
  }
}
