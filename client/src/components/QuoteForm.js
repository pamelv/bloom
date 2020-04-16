import React from "react";
import { Card } from "react-bootstrap";

export default function QuoteForm(props){
 
    return (
        <div>
            <Card className="card quote text-center shadow-lg p-3 mb-5 bg-white rounded-lg">
                <h5 className="text-center">DAILY INSPIRATION</h5>
                <Card.Body>
                        <div key={props.quoteLink}>
                            <Card.Title className="my-3">{props.quoteText}</Card.Title>
                            <h6>By {props.quoteAuthor}</h6> 

                            <div className="wrapper mt-5">
                            <button className="m-auto" type="submit" onClick={() =>
                                props.getAnotherQuote()}>
                                    NEW QUOTE
                            </button>{' '}
                            </div>
                        </div>
                </Card.Body>        
            </Card>        
        </div>
    )   
}

