import React from "react";
import history from "../history";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
const categories = [
  {
    title: "Music",
    imageUrl: "https://srblaw.co.nz/sites/default/files/music.jpg",
    route:"/playlist",
  },
  {
    title: "Poem",
    imageUrl:
      "https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg",
      route:"/poem",
  },
  // {
  //   title: "Workout",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  // },
  {
    title: "Podcast",
    imageUrl:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      route:"/podcast",
  },
  {
    title: "Cooking",
    imageUrl:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      route:"/recipe",
  },
];

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
        <Navbar title="Dashboard" currentMood={this.state.currentMood} />
        <div>
          {categories.map((category) => (
            <Category img={category.imageUrl} title={category.title} Linkurl={category.route}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
