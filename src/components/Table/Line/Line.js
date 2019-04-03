import React from "react";
// source: https://react-tooltip.netlify.com/
import ReactTooltip from "react-tooltip";
import domain from "../../../assets/domain";
import { ReactComponent as Copy } from "../../../assets/img/copy.svg";

import "./Line.css";

const line = props => {
  const { id, original, short, visits, incVisits, copyToClipboard } = props;

  return (
    <ul className="table-row">
      <li>
        <a href={original} target="blank">
          {original}
        </a>
      </li>
      <li className="short-url">
        <a href={domain + short} onClick={() => incVisits(id)} target="blank">
          {domain + short}
        </a>
        <span
          data-tip="copy"
          className="clipboard"
          onClick={() => {
            const url = domain + short;
            copyToClipboard(url);
          }}
        >
          <ReactTooltip place="bottom" type="dark" effect="solid" />
          <Copy />
        </span>
      </li>

      <li>{visits}</li>
    </ul>
  );
};

export default line;
