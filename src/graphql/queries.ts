/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUrl = /* GraphQL */ `
  query GetUrl($id: ID!) {
    getUrl(id: $id) {
      id
      original
      short
      visits
      createdAt
      updatedAt
    }
  }
`;
export const listUrls = /* GraphQL */ `
  query ListUrls(
    $filter: ModelUrlFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUrls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        original
        short
        visits
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
