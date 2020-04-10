import React, { Component } from "react";
import API from "../utils/Podcast.api";
import PodcastCard from "../components/PodcastCard";
export default class Podcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [],
    };
  }

  componentDidMount() {
    console.log("mounted");
    API.getPodcast()
      .then((response) => {
        console.log("podcast:", response.data);
        this.setState({
          podcasts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>
          <h2>Podcast</h2>
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
              link="#"
            />
          </div>
        ))}
      </div>
    );
  }
}
