import React from "react";
import Validation from "../../Validation/Validation";

import "./InputBar.css";

const inputBar = props => {
  const { url, handleShort, addShort, isValid } = props;
  return (
    <div className="container">
      <div className="input-bar-container">
        <div className="input-bar">
          <input
            style={{
              boxShadow: !isValid && "0 0 0 3px red inset"
            }}
            type="url"
            name="url"
            value={url}
            id="url"
            placeholder="Your original URL here"
            onChange={handleShort}
          />
          <Validation error={isValid} />
        </div>

        <button type="submit" onClick={() => addShort()}>
          shorten url
        </button>
      </div>
    </div>
  );
};

export default inputBar;
