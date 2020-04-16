import React, { Component } from "react";
import API from "../utils/poem.api";
import PoemForm from "../components/PoemForm";
import history from "../history";


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
          poems: response.data
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
        poems: response.data
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
        poems: response.data
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
      <div>
        <div>
          <h5 className="text-center my-5">DAILY POEMS CURATED JUST FOR YOU</h5>
        </div>
       
            <PoemForm
              poems={this.state.poems}
              handleFormSave={this.handleFormSave}
            /> 
     </div> 
    );
  }
}
  
