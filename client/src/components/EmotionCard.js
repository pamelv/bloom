import React from "react";

function emotionCard(props) {
  return (
    <div className="col s12">
      <div className="card blue lighten-4">
        <div className="card-content black-text">
          <h5>{props.emotion}</h5>
          <h3>{props.emoji}</h3>
          <h6>{props.comment}</h6>
          <span style={{ float: "right" }}>{props.date}</span>
        </div>
      </div>
    </div>
  );
}

export default emotionCard;
