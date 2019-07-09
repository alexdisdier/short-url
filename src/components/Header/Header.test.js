import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "./Header";

configure({ adapter: new Adapter() });

describe("Header", () => {
  let props = {
    url: "url",
    isValid: true,
    addShort: jest.fn(),
    handleShort: jest.fn()
  };

  describe("render()", () => {
    it("renders a header with an input bar", () => {
      const wrapper = shallow(<Header {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
ShallowWrapper {
  Symbol(enzyme.__root__): [Circular],
  Symbol(enzyme.__unrendered__): <header
    addShort={[MockFunction]}
    handleShort={[MockFunction]}
    isValid={true}
    url="url"
  />,
  Symbol(enzyme.__renderer__): Object {
    "batchedUpdates": [Function],
    "checkPropTypes": [Function],
    "getNode": [Function],
    "render": [Function],
    "simulateError": [Function],
    "simulateEvent": [Function],
    "unmount": [Function],
  },
  Symbol(enzyme.__node__): Object {
    "instance": null,
    "key": undefined,
    "nodeType": "host",
    "props": Object {
      "children": Array [
        <h1
          className="container"
        >
          Simplify your links
        </h1>,
        <inputBar
          addShort={[MockFunction]}
          handleShort={[MockFunction]}
          isValid={true}
          url="url"
        />,
      ],
    },
    "ref": null,
    "rendered": Array [
      Object {
        "instance": null,
        "key": undefined,
        "nodeType": "host",
        "props": Object {
          "children": "Simplify your links",
          "className": "container",
        },
        "ref": null,
        "rendered": "Simplify your links",
        "type": "h1",
      },
      Object {
        "instance": null,
        "key": undefined,
        "nodeType": "function",
        "props": Object {
          "addShort": [MockFunction],
          "handleShort": [MockFunction],
          "isValid": true,
          "url": "url",
        },
        "ref": null,
        "rendered": null,
        "type": [Function],
      },
    ],
    "type": "header",
  },
  Symbol(enzyme.__nodes__): Array [
    Object {
      "instance": null,
      "key": undefined,
      "nodeType": "host",
      "props": Object {
        "children": Array [
          <h1
            className="container"
          >
            Simplify your links
          </h1>,
          <inputBar
            addShort={[MockFunction]}
            handleShort={[MockFunction]}
            isValid={true}
            url="url"
          />,
        ],
      },
      "ref": null,
      "rendered": Array [
        Object {
          "instance": null,
          "key": undefined,
          "nodeType": "host",
          "props": Object {
            "children": "Simplify your links",
            "className": "container",
          },
          "ref": null,
          "rendered": "Simplify your links",
          "type": "h1",
        },
        Object {
          "instance": null,
          "key": undefined,
          "nodeType": "function",
          "props": Object {
            "addShort": [MockFunction],
            "handleShort": [MockFunction],
            "isValid": true,
            "url": "url",
          },
          "ref": null,
          "rendered": null,
          "type": [Function],
        },
      ],
      "type": "header",
    },
  ],
  Symbol(enzyme.__options__): Object {
    "adapter": ReactSixteenAdapter {
      "options": Object {
        "enableComponentDidUpdateOnSetState": true,
        "legacyContextMode": "parent",
        "lifecycles": Object {
          "componentDidUpdate": Object {
            "onSetState": true,
          },
          "getChildContext": Object {
            "calledByRenderer": false,
          },
          "getDerivedStateFromError": true,
          "getDerivedStateFromProps": Object {
            "hasShouldComponentUpdateBug": false,
          },
          "getSnapshotBeforeUpdate": true,
          "setState": Object {
            "skipsComponentDidUpdateOnNullish": true,
          },
        },
      },
    },
    Symbol(enzyme.__providerValues__): undefined,
  },
  Symbol(enzyme.__providerValues__): Map {},
}
`);
    });
  });
});
