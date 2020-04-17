import React, { Component } from "react";
import API from "../utils/poem.api";
import PoemForm from "../components/PoemForm";
import history from "../history";
import Navbar from "../components/Navbar";
import CategoryNavigation from "../components/CategoryNavigation";

export default class Poem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      currentMood: localStorage.getItem("current_mood"),
      poems: [],
    };
  }

  componentDidMount() {
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

  handleFormSave = (poem) => {
    API.savePoem(poem).then((response) => {
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
          <Navbar title="Poem" />
          <div
            style={{
              columnCount: "1",
              columnGap: "1em",
              padding: "0.7em",
              height: "100%",
              marginBottom: "55px",
            }}
          >
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
          <CategoryNavigation currentPage="poem" />
        </div>
      </div>
    );
  }
}
