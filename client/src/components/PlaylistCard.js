import React from "react";

export default function PlaylistCard(props) {
  return (
    <div className="mb-5">
    <div key={props.id} className="card text-center m-auto shadow-lg p-3 mb-5 bg-white rounded-lg" style={{ width: "25rem" }}>
          <img src={props.url} alt="" />
            <h3>{props.name}</h3>
              <ul>
                <li>Description: {props.description}</li>
                <li><a href={props.href} target="_blank" rel="noopener noreferrer">
            Open in Browser
          </a>
          <br></br>
          <a href={props.app} target="_blank" rel="noopener noreferrer">
            Open in Spotify App
          </a></li>
            </ul>


            <button type="submit" className="m-auto" onClick={() => {
              props.handleFormSave(props);
            }}>
                BOOKMARK
            </button>
        </div>
    </div> 
  );
}
