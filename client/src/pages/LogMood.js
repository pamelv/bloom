import React from "react";
import API from "../utils/user.api";
import QUOTE from "../utils/quote.api";
import AddMood from "../components/AddMoodModal";
import history from "../history";

class LogMood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      name: "",
      id: "",
      quotes: "",
    };
  }

  componentDidMount() {
    this.getUser();
    this.getQuote();
  }

  getQuote() {
    QUOTE.getQuote()
      .then((response) => {
        this.setState({
          quotes: response.data,
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
        console.log(res.data);
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
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h2>Hello {this.state.name}!</h2>
          <AddMood />
        </div>

        <div key={this.state.quotes.quoteLink}>
          <h4>{this.state.quotes.quoteText}</h4>
          <h6>
            <i>{this.state.quotes.quoteAuthor}</i>
          </h6>
          <br></br>
        </div>
      </div>
    );
  }
}

export default LogMood;
