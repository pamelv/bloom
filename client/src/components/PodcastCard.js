import React from "react";

export default function PodcastCard(props) {
  return (
    <div className="mb-5">
      <div
        key={props.id}
        className="card text-center m-auto shadow-lg p-3 mb-5 bg-white rounded-lg"
        style={{ width: "30rem" }}
      >
        <img src={props.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5
            className="card-title my-2"
            style={{ textTransform: "uppercase" }}
          >
            <b>{props.title_original}</b>
          </h5>
          <div className="card-text my-2">{props.podcast_title_original}</div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="mx-1">
              <a href={props.audio} target="_blank" rel="noopener noreferrer">
                Audio
              </a>
            </button>
            {/* <a href={props.link} className="btn btn-primary"
                  style={{ marginLeft: "1rem" }}>BOOKMARK</a> */}
            <button
              type="submit"
              className="mx-1"
              onClick={() => {
                props.handleFormSave(props);
              }}
            >
              BOOKMARK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
