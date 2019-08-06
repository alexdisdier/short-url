import React from "react";
import PropType from "prop-types";

import Line from "./Line/Line";

import "./Table.css";

const table = props => {
  const { urls, incVisits, copyToClipboard, windowWidth } = props;
  const lines = [];

  if (urls !== undefined) {
    for (let i = 0; i < urls.length; i++) {
      lines.push(
        <Line
          key={i}
          id={urls[i]._id}
          original={urls[i].original}
          short={urls[i].short}
          visits={urls[i].visits}
          incVisits={incVisits}
          copyToClipboard={copyToClipboard}
        />
      );
    }
  }

  return (
    <div className={windowWidth > 600 ? "container" : null}>
      <div className="table">
        <div className="table-head">
          <span>Original {windowWidth > 600 ? "URL" : ""}</span>
          <span>Short {windowWidth > 600 ? "URL" : ""}</span>
          <span>Visits</span>
        </div>
        <div>{lines}</div>
      </div>
    </div>
  );
};

table.propTypes = {
  urls: PropType.array,
  incVisits: PropType.func.isRequired,
  copyToClipboard: PropType.func.isRequired,
  windowWidth: PropType.number.isRequired
};

export default table;
