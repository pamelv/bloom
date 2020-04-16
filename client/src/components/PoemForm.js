import React from "react";

export default function PoemForm(props) {
  return (
    <div>
      {props.poems.map((poem) => {
        return (
          <div className="card poem text-center shadow-lg p-3 mb-5 bg-white rounded-lg">
            <div className="card-body">
              <div key={poem.title}>
                <h5 className="my-5">
                  <b>{poem.title}</b>
                </h5>
                <h6>By {poem.author}</h6>

                <ul className="mb-5">
                  {poem.lines.map((value, index) => {
                    return <li key={index}>{value}</li>;
                  })}
                </ul>

                <button
                  type="submit"
                  className="m-auto"
                  onClick={() => {
                    props.handleFormSave(poem);
                  }}
                >
                  BOOKMARK
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
