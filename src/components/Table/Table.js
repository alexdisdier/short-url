import React from "react";
import Line from "./Line/Line";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

import Loading from "../Loading/Loading";

import "./Table.css";

const getUrlsQuery = gql`
  {
    urls {
      original
      short
      visits
      id
    }
  }
`;

const table = props => {
  const { incVisits, copyToClipboard, windowWidth, data } = props;

  if (data.loading) {
    return <Loading />;
  } else {
    return (
      <div className={windowWidth > 600 ? "container" : null}>
        <div className="table">
          <div className="table-head">
            <span>Original {windowWidth > 600 ? "URL" : ""}</span>
            <span>Short {windowWidth > 600 ? "URL" : ""}</span>
            <span>Visits</span>
          </div>
          <div>
            {data.urls.map(url => {
              return (
                <Line
                  key={url.id}
                  id={url.id}
                  original={url.original}
                  short={url.short}
                  visits={url.visits}
                  incVisits={incVisits}
                  copyToClipboard={copyToClipboard}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default graphql(getUrlsQuery)(table);
