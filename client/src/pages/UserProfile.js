import React from "react";
import API from "../utils/user.api";
import EmotionCard from "../components/EmotionCard";
import Moment from "react-moment";
import AddMood from "../components/AddMood";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: localStorage.getItem("id"),
      name: "",
      emotions: [],
    };
  }
  componentDidMount() {
    console.log(this.state.id);
    this.userMood();
    console.log(this.state.name);
    this.getUser();
  }

  getUser() {
    API.user(this.state.id).then((res) => {
      this.setState({ name: res.data.firstname });
      console.log(this.state.name);
    });
  }
  userMood() {
    API.getMood(this.state.id)
      .then((res) => {
        var results = res.data;
        this.setState({ emotions: results });
        console.log(this.state.emotions);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h2>Hello {this.state.name}!</h2>
          <AddMood />
        </div>

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
    );
  }
}

export default Profile;
