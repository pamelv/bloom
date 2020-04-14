import React, { Component } from "react";
import API from "../utils/quote.api";

export default class Quote extends Component {
  state = {
    quotes: "",
  };

  componentDidMount() {
    console.log("mounted");
    API.getQuote()
      .then((response) => {
        // const quoteData = response.data;
        // console.log( response.data);
        this.setState({
          quotes: response.data,
        });
        // console.log(quoteData);
        console.log(this.state.quotes.quoteText);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div key={this.state.quotes.quoteLink}>
          <h4>{this.state.quotes.quoteText}</h4>
          <h6>
            <i>{this.state.quotes.quoteAuthor}</i>
          </h6>
        </div>
      </div>
    );
  }
}
