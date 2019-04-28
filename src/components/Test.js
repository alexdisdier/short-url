import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const test = () => (
  <Query
    query={gql`
      {
        urls {
          original
          short
          visits
          id
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.urls.map(e => {
        return <p>{e}</p>;
      });
    }}
  </Query>
);

export default test;
