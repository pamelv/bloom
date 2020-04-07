import React from "react";

function emotionCard(props) {
  return (
    <div className="col s12">
      <div className="card teal lighten-3">
        <div className="card-content white-text">
          <span className="card-title">{props.date}</span>
          <h5>{props.emotion}</h5>
        </div>
      </div>
    </div>
  );
}

export default emotionCard;
