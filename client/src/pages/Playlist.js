import React, { Component } from "react";
import API from "../utils/playlist.api";
import PlaylistCard from "../components/PlaylistCard";
export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
    };
  }

  componentDidMount() {
    console.log("mounted");
    API.getPlaylist()
      .then((response) => {
        console.log("playlist:", response.data);
        this.setState({
          playlists: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>Playlist</div>

        {this.state.playlists.map((playlist) => (
          <div className="col s12" value="mood" key={playlist.id}>
            <PlaylistCard
              id={playlist.id}
              name={playlist.name}
              url={playlist.images[0].url}
              description={playlist.description}
              tracks={playlist.tracks.total}
              href={playlist.href}
            />
          </div>
        ))}
      </div>
    );
  }
}
