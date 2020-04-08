import React, { Component } from "react";
import API from "../utils/poem.api";

export default class Poem extends Component {
  state = {
    poems: []
  };

  componentDidMount() {
    console.log("mounted");
    API.getPoem()
      .then(response => {
        console.log(response.data);
        this.setState({
          poem: response.data
      });
    })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    return (
        <div>
            <div key={this.title}>
              <h1>{this.title}</h1>
              <h3>BY {this.author}</h3>
              
              <p>{this.lines}</p>

              <button type="submit">
                <a href="/saved">BOOKMARK</a>
              </button>
            </div>
        </div>
          );
        }    
  }