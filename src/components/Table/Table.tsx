import React from "react";

import { Urls } from "../../types";

import Line from "./Line/Line";

import "./Table.css";

interface TableProps {
  urls: Array<Urls>;
  copyToClipboard: Function;
  incVisits: Function;
  windowWidth: number;
}

const table: React.FC<TableProps> = ({
  urls,
  incVisits,
  copyToClipboard,
  windowWidth
}: TableProps) => {
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
    <div className={windowWidth > 600 ? "container" : ""}>
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

export default table;
