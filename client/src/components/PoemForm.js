import React from "react";

export default function PoemForm(props){
    return(
        <div>
        <h1>POEMS FOR YOU</h1>
        {props.poems.map((poem) => {
            return (
            <div className="card poem">
                <div className="card-body">
                    <div key={poem.title}>
                    <h4>{poem.title}</h4>
                    <h6>By {poem.author}</h6>
                    
                    <ul>{poem.lines.map((value, index) => {
                        return(
                            <li key={index}>{value}</li>
                        )
                    })}
                    </ul>

                    <button type="submit">BOOKMARK</button>
                    </div>
                </div>
            </div>
            )})}
        </div>
    )}
   
   
   
    

