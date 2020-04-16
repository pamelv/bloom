import React, { Component } from "react";
import API from "../utils/quote.api";
import QuoteForm from "../components/QuoteForm";




export default class Quote extends Component {
        constructor(props) {
          super(props);
          this.state = {
            quotes: "",
          };
        }
    
        getAnotherQuote =() => {
            API.getQuote().then((response) => {
                console.log(response.data);
                this.setState({
                    quotes: response.data
                });
            });
        }


    componentDidMount(){
        console.log("mounted");
        API.getQuote()
            .then((response) => {
            
                console.log( response.data);
                this.setState({
                    quotes: response.data
                    
                });
                // console.log(quoteData);
                console.log(this.state.quotes.quoteText);
            
            })
            .catch(error => {
                console.log(error);
            });
        }

        


        render() {
            return(
             
                <QuoteForm 
                    quoteText={this.state.quotes.quoteText}
                    quoteAuthor={this.state.quotes.quoteAuthor}
                    quoteLink={this.state.quotes.quoteLink}

                    getAnotherQuote={this.getAnotherQuote}
                    
                />    
            );
        }
 }


