import React from "react";
import API from "../utils/user.api";
import QUOTE from "../utils/quote.api";
import AddMood from "../components/AddMoodModal";
import history from "../history";
import pink from "../img/bloom_pink.gif";
import blue from "../img/blue.gif";
import orange from "../img/bloom_orange.gif";

const infoDiv = {
  backgroundColor: "#ded6ce",
  padding: "10px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: "10px",
  minWidth: "300px",
  minHeight: "550px",
};
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
        style={{
          margin: "0px",
          padding: "0px",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          background:
            "linear-gradient(351deg, rgba(200,123,148,1) 0%, rgba(156,206,213,1) 50%, rgba(251,168,134,1) 100%)",
        }}
      >
        <div style={infoDiv}>
          <div
            style={{
              width: "70%",
              position: "absolute",
              top: "15%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img style={{ width: "30%" }} src={pink} alt="Bloom" />
            <img style={{ width: "30%" }} src={blue} alt="Bloom" />
            <img style={{ width: "30%" }} src={orange} alt="Bloom" />
          </div>
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "2em", display: "inline-block" }}>
              Hello {this.state.name}!
            </h2>
            <AddMood />
          </div>
          <div
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              textAlign: "center",
            }}
            key={this.state.quotes.quoteLink}
          >
            <h4 style={{ fontSize: "1.5em", fontWeight: 300 }}>
              {this.state.quotes.quoteText}
            </h4>
            <h6 style={{ fontSize: "1em", fontWeight: 400 }}>
              <i>{this.state.quotes.quoteAuthor}</i>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default LogMood;
