import React from "react";
import history from "../history";

export default function Logout() {
  const clearToken = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };
  return (
    <button onClick={clearToken} style={{ float: "right" }}>
      Log Out
    </button>
  );
}
