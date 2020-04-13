import React, { Component } from "react";
import API from "../../utils/poem.api";
import PoemForm from "../../components/PoemForm";

export default class Poem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: [],
    };
  }

  componentDidMount() {
    console.log("mounted");
    API.getPoemHappy()
      .then((response) => {
    
        console.log("poems:", response.data);
        this.setState({
          poems: response.data
      });
 
      console.log(this.state.poems);
    })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
        
            <PoemForm
              poems={this.state.poems}
            />
      
    )}
}
  
