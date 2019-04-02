import React from "react";

import "./Line.css";

const line = props => {
  return (
    <div className="table-row">
      <a href={props.original} target="blank">
        {props.original}
      </a>
      <a href={props.short} target="blank">
        {props.short}
      </a>
      <span>{props.visits}</span>
    </div>
  );
};

export default line;
