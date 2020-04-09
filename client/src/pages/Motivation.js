import React, { Component } from "react";
import API from "../utils/motivation.api";
import PlaylistCard from "../components/MotivationCard";
export default class Motivation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      motivations: [],
    };
  }

  componentDidMount() {
    console.log("mounted");
    API.getMotivation()
      .then((response) => {
        console.log("playlist:", response.data);
        this.setState({
          motivations: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>Motivation</div>

        {this.state.motivations.map((motivation) => (
          <div className="col s12" value="mood" key={motivation.id}>
            <PlaylistCard
              id={motivation.id}
              title_original={motivation.title_original}
              image={motivation.image}
              podcast_title_original={motivation.podcast_title_original}
              audio_length_sec={motivation.audio_length_sec}
              audio={motivation.audio}
            />
          </div>
        ))}
      </div>
    );
  }
}
