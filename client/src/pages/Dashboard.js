import React from "react";
import history from "../history";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      moodParam: localStorage.getItem("mood"),
      currentMood: "",
    };
  }

  componentDidMount() {
    this.loggedIn();
    this.currentMood();
  }

  loggedIn() {
    // eslint-disable-next-line
    if (this.state.token == undefined) {
      history.push("/login");
    }
  }

  currentMood() {
    const happy = "😁";
    const bleh = "😐";
    const sad = "🙁";
    if (this.state.moodParam === happy) {
      this.setState({ currentMood: "Happy" });
      console.log(this.state.currentMood);
    } else if (this.state.moodParam === bleh) {
      this.setState({ currentMood: "Bleh" });
    } else if (this.state.moodParam === sad) {
      this.setState({ currentMood: "Sad" });
    }
  }
  render() {
    localStorage.setItem("current_mood", this.state.currentMood);
    return (
      <div>
        <h2>Dashboard</h2>
        <h3>{this.state.currentMood}</h3>
      </div>
    );
  }
}

export default App;
