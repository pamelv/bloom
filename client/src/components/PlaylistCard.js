import React from "react";

export default function PlaylistCard(props) {
  return (
    <div className="mb-5">
    <div key={props.id} className="card text-center m-auto shadow-lg p-3 mb-5 bg-white rounded-lg" style={{ width: "25rem" }}>
          <img src={props.url} alt="" />
            <h3>{props.name}</h3>
              <ul>
                <li>Description: {props.description}</li>
                <li>Tracks: {props.tracks.total}</li>
                <li><a href={props.href}>Link</a></li>
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
