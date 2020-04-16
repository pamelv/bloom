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

    switch (this.state.moodParam) {
      case happy:
        this.setState({ currentMood: "Happy" });
        break;
      case bleh:
        this.setState({ currentMood: "Bleh" });
        break;
      case sad:
        this.setState({ currentMood: "Sad" });
        break;
      default:
        console.warn("No mood entered");
    }
  }
  render() {
    localStorage.setItem("current_mood", this.state.currentMood);
    return (
      <div>
        <h2>Dashboard</h2>
        <h3>{this.state.currentMood}</h3>
        <a href="/recipe">Recipe</a>
        <br></br>
        <a href="/podcast">Podcast</a>
        <br></br>
        <a href="/playlist">Playlist</a>
        <br></br>
        <a href="/poem">Poem</a>
      </div>
    );
  }
}

export default App;
