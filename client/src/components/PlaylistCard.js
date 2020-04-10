import React from "react";

export default function PlaylistCard(props) {
  return (
    <div key={props.id}>
      <img src={props.url} alt="" />
      <h3>{props.name}</h3>
      <ul>
        <li>Description: {props.description}</li>
        <li>Tracks: {props.tracks.total}</li>
        <li>
          <a href={props.href}>Link</a>
        </li>
      </ul>

      <button>BOOKMARK</button>
    </div>
  );
}
