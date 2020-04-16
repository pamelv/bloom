import React, { Component } from "react";
import API from "../utils/Podcast.api";
import PodcastCard from "../components/PodcastCard";
import history from "../history";

export default class Podcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      currentMood: localStorage.getItem("current_mood"),
      podcasts: [],
    };
  }

  componentDidMount() {
    this.loggedIn();
    if (this.state.currentMood === "Happy") {
      API.getPodcastHappy()
        .then((response) => {
          console.log("podcast:", response.data);
          this.setState({
            podcasts: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (this.state.currentMood === "Bleh") {
      API.getPodcastBleh()
        .then((response) => {
          console.log("podcast:", response.data);
          this.setState({
            podcasts: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (this.state.currentMood === "Sad") {
      API.getPodcastSad()
        .then((response) => {
          console.log("podcast:", response.data);
          this.setState({
            podcasts: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else console.log("no mood available");
  }

  handleFormSave = (podcast) => {
    API.savePodcast(podcast).then((response) => {
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
          <h5 className="text-center my-5">
            DAILY PODCASTS CURATED JUST FOR YOU
          </h5>
        </div>

        {this.state.podcasts.map((podcast) => (
          <div className="col s12" value="mood" key={podcast.id}>
            <PodcastCard
              id={podcast.id}
              title_original={podcast.title_original}
              image={podcast.image}
              podcast_title_original={podcast.podcast_title_original}
              audio_length_sec={podcast.audio_length_sec}
              audio={podcast.audio}
              // link="#"

              handleFormSave={this.handleFormSave}
            />
          </div>
        ))}
      </div>
    );
  }
}
