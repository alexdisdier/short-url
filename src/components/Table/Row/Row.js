import React from 'react';
// source: https://react-tooltip.netlify.com/
import ReactTooltip from 'react-tooltip';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import domain from '../../../assets/domain';
import { ReactComponent as Copy } from '../../../assets/img/copy.svg';

import './Row.css';

export function Row(props) {
  return <div>row component</div>;
  // const { id, original, short, visits, incVisits, copyToClipboard } = props;
  // console.log('test');
  // return (
  //   <ul className="table-row">
  //     <li>
  //       <a href={original} target="blank">
  //         {original}
  //       </a>
  //     </li>
  //     <li className="short-url">
  //       <a href={domain + short} onClick={() => incVisits(id)} target="blank">
  //         {domain + short}
  //       </a>
  //       <span
  //         data-tip="copy"
  //         className="clipboard"
  //         onClick={() => {
  //           const url = domain + short;
  //           copyToClipboard(url);
  //         }}
  //       >
  //         <ReactTooltip place="bottom" type="dark" effect="solid" />
  //         <Copy />
  //       </span>
  //     </li>

  //     <li>{visits}</li>
  //   </ul>
  // );
}

export default createFragmentContainer(Row, {
  Row: graphql`
    # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
    # This fragment only applies to objects of type 'Todo'.
    fragment Row_Row on Url {
      id
      original
      short
      visits
    }
  `
});
