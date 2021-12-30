import React from 'react';
import ReactTooltip from 'react-tooltip';
import domain from '../../../assets/domain';

import './Line.css';

interface LineProps {
  id: string;
  original: string;
  short: string;
  visits: number;
  incVisits: Function;
  copyToClipboard: Function;
}

const line: React.FC<LineProps> = ({
  id,
  original,
  short,
  visits,
  incVisits,
  copyToClipboard
}: LineProps) => {
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
          {/* <Copy /> */}
        </span>
      </li>

      <li>{visits}</li>
    </ul>
  );
};

export default line;
