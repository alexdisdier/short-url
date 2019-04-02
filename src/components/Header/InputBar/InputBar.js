import React from "react";

import "./InputBar.css";
const inputBar = props => {
  return (
    <div className="container">
      <div className="input-bar">
        <input
          type="url"
          name="url"
          id="url"
          placeholder="Your original URL here"
        />
        <button type="submit" onClick={() => alert("you clicked me")}>
          shorten url
        </button>
      </div>
    </div>
  );
};

export default inputBar;
