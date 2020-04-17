import React, { Component } from "react";
import API from "../utils/playlist.api";
import PlaylistCard from "../components/PlaylistCard";
import history from "../history";

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      id: localStorage.getItem("id"),
      currentMood: localStorage.getItem("current_mood"),
      playlists: [],
    };
  }

  componentDidMount() {
    this.loggedIn();
    if (this.state.currentMood === "Happy") {
      API.getPlaylistHappy()
        .then((response) => {
          console.log("playlist:", response.data);
          this.setState({
            playlists: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (this.state.currentMood === "Bleh") {
      API.getPlaylistBleh()
        .then((response) => {
          console.log("playlist:", response.data);
          this.setState({
            playlists: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (this.state.currentMood === "Sad") {
      API.getPlaylistSad()
        .then((response) => {
          console.log("playlist:", response.data);
          this.setState({
            playlists: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else console.log("no mood available");
  }

  handleFormSave = (playlist) => {
    API.savePlaylist(this.state.id, playlist).then((response) => {
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
            DAILY PLAYLISTS CURATED JUST FOR YOU
          </h5>
        </div>

        {this.state.playlists.map((playlist) => (
          <div className="col s12" value="mood" key={playlist.id}>
            <PlaylistCard
              id={playlist.id}
              name={playlist.name}
              url={playlist.images[0].url}
              description={playlist.description}
              href={playlist.external_urls.spotify}
              app={playlist.uri}
              handleFormSave={this.handleFormSave}
            />
          </div>
        ))}
      </div>
    );
  }
}
