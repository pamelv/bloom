import React from "react";
import API from "../utils/user.api";
import PODCAST from "../utils/Podcast.api";
import POEM from "../utils/poem.api";
import RECIPE from "../utils/recipe.api";
import PLAYLIST from "../utils/playlist.api";
import EXERCISE from "../utils/exercise.api";
import Card from "../components/Card";
import history from "../history";
import Parser from "html-react-parser";
import Navbar from "../components/Navbar";
import BookmarkRecipeCard from "../components/BookmarkRecipeCard";
import BookmarkPlaylistCard from "../components/BookmarkPlaylistCard";
import BookmarkPodcastCard from "../components/BookmarkPodcastCard";
import BookmarkBottomNav from "../components/BookmarkBottomNav";

class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      currentMood: localStorage.getItem("current_mood"),
      id: localStorage.getItem("id"),
      poems: [],
      recipes: [],
      playlists: [],
      podcasts: [],
      exercises: [],
    };
  }

  componentDidMount() {
    this.getUser();
    this.getPoems();
    this.getRecipe();
    this.getPlaylist();
    this.getPodcast();
    this.getExcercise();
  }

  getPoems() {
    POEM.getSavedPoem(this.state.token)
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
    RECIPE.getSavedRecipe(this.state.token)
      .then((response) => {
        this.setState({
          recipes: response.data,
        });
        console.log(this.state.recipes);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPlaylist() {
    PLAYLIST.getSavedPlaylist(this.state.token)
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
    PODCAST.getSavedPodcast(this.state.token)
      .then((response) => {
        this.setState({
          podcasts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getExcercise() {
    EXERCISE.getSavedExercise(this.state.token)
      .then((response) => {
        this.setState({
          exercises: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getUser() {
    API.getUser(this.state.token)
      .then((res) => {
        this.setState({ name: res.data.firstname });
        localStorage.setItem("id", res.data._id);
        this.setState({ id: res.data._id });
      })
      .catch((error) => {
        console.log(error);
        history.push("/login");
      });
  }

  render() {
    return (
      <div
      // style={{
      //   margin: "0px",
      //   padding: "0px",
      //   width: "100vw",
      //   position: "relative",
      //   background:
      //     "linear-gradient(351deg, rgba(200,123,148,1) 0%, rgba(156,206,213,1) 50%, rgba(251,168,134,1) 100%)",
      //   backgroundSize: "cover",
      // }}
      >
        <Navbar title="Bookmark" currentMood={this.state.currentMood} />
        <div
          style={{
            padding: "0.7em",
            height: "100%",
            paddingBottom: "60px",
          }}
        >
          <div style={{ height: "30px" }} id="playlist"></div>
          {/* Playlist Bookmark */}
          <h3 style={{ fontSize: "2 rem" }}>Music</h3>
          <div
            style={{
              overflowX: "scroll",
              flexDirection: "row",
              whiteSpace: "nowrap",
            }}
          >
            {this.state.playlists.map((playlist) => (
              <div
                className="col s12"
                key={playlist._id}
                style={{
                  display: "inline-block",
                  whiteSpace: "normal",
                  verticalAlign: "top",
                }}
              >
                <BookmarkPlaylistCard
                  id={playlist._id}
                  name={playlist.name}
                  description={playlist.description}
                  url={playlist.url}
                  href={playlist.href}
                />
              </div>
            ))}
          </div>

          <div style={{ height: "30px" }} id="poem"></div>
          {/* Poem Bookmark */}
          <h3 style={{ fontSize: "2 rem" }}>Poems</h3>
          <div
            style={{
              overflowX: "scroll",
              flexDirection: "row",
              whiteSpace: "nowrap",
            }}
          >
            {this.state.poems.map((poem) => (
              <div
                className="col s12"
                key={poem._id}
                style={{
                  display: "inline-block",
                  whiteSpace: "normal",
                  verticalAlign: "top",
                }}
              >
                <Card
                  smallText={poem.author}
                  boldText={poem.title}
                  body={poem.lines}
                />
              </div>
            ))}
          </div>
          <div style={{ height: "30px" }} id="exercise"></div>
          {/* exercise Bookmark */}
          <h3 style={{ fontSize: "2 rem" }}>Exercise</h3>
          <div
            style={{
              overflowX: "scroll",
              flexDirection: "row",
              whiteSpace: "nowrap",
            }}
          >
            {this.state.exercises.map((exercise) => (
              <div
                className="col s12"
                key={exercise._id}
                style={{
                  display: "inline-block",
                  whiteSpace: "normal",
                  verticalAlign: "top",
                }}
              >
                <Card
                  boldText={exercise.name}
                  body={Parser(exercise.description)}
                />
              </div>
            ))}
          </div>
          <div style={{ height: "30px" }} id="podcast"></div>
          {/* Podcast Bookmark */}
          <h3 style={{ fontSize: "2 rem" }}>Podcast</h3>
          <div
            style={{
              overflowX: "scroll",
              flexDirection: "row",
              whiteSpace: "nowrap",
            }}
          >
            {this.state.podcasts.map((podcast) => (
              <div
                className="col s12"
                key={podcast._id}
                style={{
                  display: "inline-block",
                  whiteSpace: "normal",
                  verticalAlign: "top",
                }}
              >
                <BookmarkPodcastCard
                  id={podcast._id}
                  name={podcast.podcast_title_original}
                  description={podcast.description}
                  url={podcast.image}
                  href={podcast.audio}
                />
              </div>
            ))}
          </div>
          <div style={{ height: "30px" }} id="recipe"></div>
          {/* recipe Bookmark */}
          <h3 style={{ fontSize: "2 rem" }}>Cooking</h3>
          <div
            style={{
              overflowX: "scroll",
              flexDirection: "row",
              whiteSpace: "nowrap",
            }}
          >
            {this.state.recipes.map((recipe) => (
              <div
                className="col s12"
                key={recipe._id}
                style={{
                  display: "inline-block",
                  whiteSpace: "normal",
                  verticalAlign: "top",
                }}
                // style={{ whiteSpace: "normal" }}
              >
                <BookmarkRecipeCard
                  smallText={`Prep Time: ${recipe.readyInMinutes}`}
                  boldText={recipe.title}
                  body={Parser(`${recipe.instructions}`, {
                    replace: (domNode) => {
                      if (!domNode) {
                        return recipe.instructions;
                      }
                    },
                  })}
                  imgUrl={recipe.image}
                  id={recipe.id}
                />
              </div>
            ))}
          </div>
        </div>
        <BookmarkBottomNav />
      </div>
    );
  }
}

export default Bookmark;
