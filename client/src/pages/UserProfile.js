import React from "react";
import API from "../utils/user.api";
import EmotionCard from "../components/EmotionCard";
import Moment from "react-moment";
import AddMood from "../components/AddMoodModal";
import history from "../history";
import Navbar from "../components/Navbar";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      currentMood: localStorage.getItem("current_mood"),
      name: "",
      id: "",
      emotions: [],
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    API.getUser(this.state.token)
      .then((res) => {
        this.setState({ name: res.data.firstname });
        localStorage.setItem("id", res.data._id);
        this.setState({ id: res.data._id });
        this.userMood(this.state.id);
      })
      .catch((error) => {
        console.log(error);
        history.push("/login");
      });
  }
  userMood(id) {
    API.getMood(id, this.state.token)
      .then((res) => {
        var results = res.data;
        this.setState({ emotions: results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div
        style={{
          margin: "0px",
          padding: "0px",
          width: "100vw",
          position: "relative",
          background:
            "linear-gradient(351deg, rgba(200,123,148,1) 0%, rgba(156,206,213,1) 50%, rgba(251,168,134,1) 100%)",
          backgroundSize: "cover",
        }}
      >
        <div style={{ width: "100%", boxSizing: "border-box" }}>
          <Navbar title="Profile" currentMood={this.state.currentMood} />
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between" }}
          ></div>
          <div
            style={{
              columnCount: "1",
              columnGap: "1em",
              padding: "0.7em",
              height: "100%",
            }}
          >
            <h2>Hello {this.state.name}!</h2>
            <AddMood />
            {this.state.emotions.map((emotion) => (
              <div className="col s12" key={emotion._id}>
                <EmotionCard
                  date={
                    <Moment format="MMM DD, YYYY @ hh:mm a">
                      {emotion.emotionCreatedAt}
                    </Moment>
                  }
                  emotion={emotion.emotion}
                  emoji={emotion.emoji}
                  comment={emotion.comment}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
