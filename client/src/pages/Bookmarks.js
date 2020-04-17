import React from "react";
import API from "../utils/user.api";
import PODCAST from "../utils/Podcast.api";
import POEM from "../utils/poem.api";
import RECIPE from "../utils/recipe.api";
import PLAYLIST from "../utils/playlist.api";
import Card from "../components/Card";
import history from "../history";

class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      id: localStorage.getItem("id"),
      poems: [],
      recipes: [],
      playlists: [],
      podcasts: [],
    };
  }

  componentDidMount() {
    this.getUser();
    this.getPoems();
    this.getRecipe();
    this.getPlaylist();
    this.getPodcast();
  }

  getPoems() {
    POEM.getSavedPoem(this.state.id)
      .then((response) => {
        this.setState({
          poems: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getRecipe() {
    RECIPE.getSavedRecipe(this.state.id)
      .then((response) => {
        this.setState({
          recipes: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPlaylist() {
    PLAYLIST.getSavedPlaylist(this.state.id)
      .then((response) => {
        this.setState({
          playlists: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPodcast() {
    PODCAST.getSavedPodcast(this.state.id)
      .then((response) => {
        this.setState({
          podcasts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getUser() {
    console.log(this.state.token);
    API.getUser(this.state.token)
      .then((res) => {
        this.setState({ name: res.data.firstname });
        localStorage.setItem("id", res.data._id);
        this.setState({ id: res.data._id });
        console.log(this.state.name);
        console.log(this.state.id);
      })
      .catch((error) => {
        console.log(error);
        history.push("/login");
      });
  }

  render() {
    return (
      <div>
        <h3>Poems</h3>
        {this.state.poems.map((poem) => (
          <div className="col s12" key={poem._id}>
            <Card
              smallText={poem.author}
              boldText={poem.title}
              body={poem.lines}
            />
          </div>
        ))}
        <h3>Recipes</h3>
        {this.state.recipes.map((recipe) => (
          <div className="col s12" key={recipe._id}>
            <Card
              boldText={recipe.title}
              body={recipe.instructions}
              imgUrl={recipe.image}
            />
          </div>
        ))}

        <h3>Playlists</h3>
        {this.state.playlists.map((playlist) => (
          <div className="col s12" key={playlist._id}>
            <Card
              boldText={playlist.name}
              body={playlist.description}
              imgUrl={playlist.url}
              url={playlist.href}
              linkName={"Listen Now"}
            />
          </div>
        ))}

        <h3>Podcasts</h3>
        {this.state.podcasts.map((podcast) => (
          <div className="col s12" key={podcast._id}>
            <Card
              boldText={podcast.podcast_title_original}
              imgUrl={podcast.image}
              url={podcast.audio}
              linkName={"Listen Now"}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Bookmark;
