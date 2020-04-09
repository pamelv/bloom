import React from "react";

export default function MotivationCard(props) {
  return (
    <div key={props.id}>
      <h1>{props.title_original}</h1>
      <img src={props.image} alt="" />
      <ul>
        <li>Description: {props.podcast_title_original}</li>
        <li>Time: {props.audio_length_sec}</li>
        <li>
          <a href={props.audio}>Audio</a>
        </li>
      </ul>

      <button>BOOKMARK</button>
    </div>
  );
}
