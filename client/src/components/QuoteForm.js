import React from "react";

export default function QuoteForm(props){
 
    return (
        <div>
            <h1>DAILY AFFIRMATION</h1>
                <div className="card quote">
                    <div className="card-body">
                        <div key={props.quoteLink}>
                            <h4>{props.quoteText}</h4>
                            <h6>By {props.quoteAuthor}</h6> 

                        </div>
                    </div>        
                </div>
        </div>
    )   
}

