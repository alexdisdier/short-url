import React from "react";
import Line from "./Line/Line";

import "./Table.css";

const table = props => {
  const { urls, incVisits, copyToClipboard } = props;
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
    <div className="container">
      <div className="table">
        <div className="table-head">
          <span>Original URL</span>
          <span>Short URL</span>
          <span>Visits</span>
        </div>
        {lines}
      </div>
    </div>
  );
};

export default table;
