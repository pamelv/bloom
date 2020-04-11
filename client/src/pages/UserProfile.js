import React from "react";
import API from "../utils/user.api";
import EmotionCard from "../components/EmotionCard";
import Moment from "react-moment";
import AddMood from "../components/AddMoodModal";
import history from "../history";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      name: "",
      id: "",
      emotions: [],
    };
  }
  componentDidMount() {
    this.getUser();
  }

  getUser() {
    console.log(this.state.token);
    API.getUser(this.state.token)
      .then((res) => {
        console.log(res.data);
        this.setState({ name: res.data.firstname });
        localStorage.setItem("id", res.data._id.$oid);
        this.setState({ id: res.data._id });
        console.log(this.state.name);
        console.log(this.state.id);
        this.userMood(this.state.id);
      })
      .catch((error) => {
        console.log(error);
        // history.push("/login");
      });
  }
  userMood(id) {
    API.getMood(id)
      .then((res) => {
        var results = res.data || [];
        this.setState({ emotions: results });
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
