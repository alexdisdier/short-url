/**
 * @flow
 * @relayHash 3fdd45706abd15e629fe13ddaf8bbbea
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RowQueryVariables = {||};
export type RowQueryResponse = {|
  +urls: ?$ReadOnlyArray<?{|
    +id: ?string,
    +original: ?string,
    +short: ?string,
    +visits: ?number,
  |}>
|};
export type RowQuery = {|
  variables: RowQueryVariables,
  response: RowQueryResponse,
|};
*/


/*
query RowQuery {
  urls {
    id
    original
    short
    visits
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "urls",
    "storageKey": null,
    "args": null,
    "concreteType": "Url",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "original",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "short",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "visits",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "RowQuery",
  "id": null,
  "text": "query RowQuery {\n  urls {\n    id\n    original\n    short\n    visits\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RowQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "RowQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '55324647bb8f0a7fc25f270fcc02b2b6';
module.exports = node;
