import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <button>
        <Link to="/login">Log In</Link>
      </button>
      <button id="signup">
        <Link to="/signup">Sign Up</Link>
      </button>
    </div>
  );
}

export default App;
