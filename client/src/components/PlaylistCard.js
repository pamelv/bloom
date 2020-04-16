import React from "react";

export default function PlaylistCard(props) {
  return (
    <div key={props.id}>
      <img src={props.url} alt="" />
      <h3>{props.name}</h3>
      <ul>
        <li>Description: {props.description}</li>
        <li>
          <a href={props.href} target="_blank" rel="noopener noreferrer">
            Open in Browser
          </a>
          <br></br>
          <a href={props.app} target="_blank" rel="noopener noreferrer">
            Open in Spotify App
          </a>
        </li>
      </ul>

      <button>BOOKMARK</button>
    </div>
  );
}
