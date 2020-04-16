import React from "react";

export default function PodcastCard(props) {
  return (
    <div key={props.id} className="card" style={{ width: "18rem" }}>
      <img src={props.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.title_original}</h5>
        <p className="card-text">{props.podcast_title_original}</p>
        <a href={props.audio} className="btn btn-primary">
          Audio
        </a>

        <a
          href={props.link}
          className="btn btn-primary"
          style={{ marginLeft: "1rem" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          BOOKMARK
        </a>
      </div>
    </div>
  );
}
