import React from "react";
import Line from "./Line/Line";

import "./Table.css";

const table = props => {
  const { incVisits, copyToClipboard } = props;
  return (
    <div className="container">
      <div className="table">
        <div className="table-head">
          <span>Original URL</span>
          <span>Short URL</span>
          <span>Visits</span>
        </div>
        {props.urls.map((e, index) => {
          return (
            <Line
              key={index}
              id={e._id}
              original={e.original}
              short={e.short}
              visits={e.visits}
              incVisits={incVisits}
              copyToClipboard={copyToClipboard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default table;
