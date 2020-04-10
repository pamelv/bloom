import React from "react";

export default function PlaylistCard(props) {
  return (
    <div key={props.id}>
      <h1>{props.name}</h1>
      {/* {(props.images = []) && props.images.length > 0 && (
        <img src={props.images[0].url} alt="" />
      )} */}
      <img src="" alt="" />
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
