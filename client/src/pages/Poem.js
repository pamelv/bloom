import React, { Component } from "react";
import API from "../utils/poem.api";

export default class Poem extends Component {
  state = {
    poems: ""
  };

  componentDidMount() {
    console.log("mounted");
    API.getPoem()
      .then((response) => {
    
        console.log("poems:", response.data);
        this.setState({
          poems: response.data,
      });
 
      console.log(this.state.poems.lines);
    })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    return (
        <div>
          <div>POEM OF THE DAY</div>
            <div key={this.state.poems.title}>
              <h4>{this.state.poems.title}</h4>
              <p>By {this.state.poems.author}</p>
              
              <p>{this.state.poems.lines}</p>

              <button type="submit">BOOKMARK</button>
            </div>
        </div>
          );
        }    
  }