import React from "react";
import Line from "./Line/Line";

import "./Table.css";
const table = props => {
  return (
    <div className="container">
      <div className="table">
        <div className="table-head">
          <span>Original URL</span>
          <span>Short URL</span>
          <span>Visits</span>
        </div>
        {props.urls.map((e, index) => {
          console.log(e);
          return (
            <Line
              key={index}
              original={e.original}
              short={e.shorten}
              visits={e.visits}
            />
          );
        })}
      </div>
    </div>
  );
};

export default table;
