import React from "react";
import { shallow, configure, mount } from "enzyme";
import sinon from "sinon";
import Adapter from "enzyme-adapter-react-16";
import ReactDOM from "react-dom";

import InputBar from "./InputBar";

configure({ adapter: new Adapter() });

describe("<InputBar /> rendering", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<InputBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render one input", () => {
    const wrapper = shallow(<InputBar />);
    expect(wrapper.find("input").length).toEqual(1);
  });

  it("should render one button", () => {
    const wrapper = shallow(<InputBar />);
    expect(wrapper.find("button").length).toEqual(1);
    expect(wrapper).toMatchInlineSnapshot(`
ShallowWrapper {
  Symbol(enzyme.__root__): [Circular],
  Symbol(enzyme.__unrendered__): <inputBar />,
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
      "children": <div
        className="input-bar-container"
      >
        <div
          className="input-bar"
        >
          <input
            id="url"
            name="url"
            placeholder="Your original URL here"
            style={
              Object {
                "boxShadow": "0 0 0 3px red inset",
              }
            }
            type="url"
          />
          <validation />
        </div>
        <button
          onClick={[Function]}
          type="submit"
        >
          shorten url
        </button>
      </div>,
      "className": "container",
    },
    "ref": null,
    "rendered": Object {
      "instance": null,
      "key": undefined,
      "nodeType": "host",
      "props": Object {
        "children": Array [
          <div
            className="input-bar"
          >
            <input
              id="url"
              name="url"
              placeholder="Your original URL here"
              style={
                Object {
                  "boxShadow": "0 0 0 3px red inset",
                }
              }
              type="url"
            />
            <validation />
          </div>,
          <button
            onClick={[Function]}
            type="submit"
          >
            shorten url
          </button>,
        ],
        "className": "input-bar-container",
      },
      "ref": null,
      "rendered": Array [
        Object {
          "instance": null,
          "key": undefined,
          "nodeType": "host",
          "props": Object {
            "children": Array [
              <input
                id="url"
                name="url"
                placeholder="Your original URL here"
                style={
                  Object {
                    "boxShadow": "0 0 0 3px red inset",
                  }
                }
                type="url"
              />,
              <validation />,
            ],
            "className": "input-bar",
          },
          "ref": null,
          "rendered": Array [
            Object {
              "instance": null,
              "key": undefined,
              "nodeType": "host",
              "props": Object {
                "id": "url",
                "name": "url",
                "onChange": undefined,
                "placeholder": "Your original URL here",
                "style": Object {
                  "boxShadow": "0 0 0 3px red inset",
                },
                "type": "url",
                "value": undefined,
              },
              "ref": null,
              "rendered": null,
              "type": "input",
            },
            Object {
              "instance": null,
              "key": undefined,
              "nodeType": "function",
              "props": Object {
                "error": undefined,
              },
              "ref": null,
              "rendered": null,
              "type": [Function],
            },
          ],
          "type": "div",
        },
        Object {
          "instance": null,
          "key": undefined,
          "nodeType": "host",
          "props": Object {
            "children": "shorten url",
            "onClick": [Function],
            "type": "submit",
          },
          "ref": null,
          "rendered": "shorten url",
          "type": "button",
        },
      ],
      "type": "div",
    },
    "type": "div",
  },
  Symbol(enzyme.__nodes__): Array [
    Object {
      "instance": null,
      "key": undefined,
      "nodeType": "host",
      "props": Object {
        "children": <div
          className="input-bar-container"
        >
          <div
            className="input-bar"
          >
            <input
              id="url"
              name="url"
              placeholder="Your original URL here"
              style={
                Object {
                  "boxShadow": "0 0 0 3px red inset",
                }
              }
              type="url"
            />
            <validation />
          </div>
          <button
            onClick={[Function]}
            type="submit"
          >
            shorten url
          </button>
        </div>,
        "className": "container",
      },
      "ref": null,
      "rendered": Object {
        "instance": null,
        "key": undefined,
        "nodeType": "host",
        "props": Object {
          "children": Array [
            <div
              className="input-bar"
            >
              <input
                id="url"
                name="url"
                placeholder="Your original URL here"
                style={
                  Object {
                    "boxShadow": "0 0 0 3px red inset",
                  }
                }
                type="url"
              />
              <validation />
            </div>,
            <button
              onClick={[Function]}
              type="submit"
            >
              shorten url
            </button>,
          ],
          "className": "input-bar-container",
        },
        "ref": null,
        "rendered": Array [
          Object {
            "instance": null,
            "key": undefined,
            "nodeType": "host",
            "props": Object {
              "children": Array [
                <input
                  id="url"
                  name="url"
                  placeholder="Your original URL here"
                  style={
                    Object {
                      "boxShadow": "0 0 0 3px red inset",
                    }
                  }
                  type="url"
                />,
                <validation />,
              ],
              "className": "input-bar",
            },
            "ref": null,
            "rendered": Array [
              Object {
                "instance": null,
                "key": undefined,
                "nodeType": "host",
                "props": Object {
                  "id": "url",
                  "name": "url",
                  "onChange": undefined,
                  "placeholder": "Your original URL here",
                  "style": Object {
                    "boxShadow": "0 0 0 3px red inset",
                  },
                  "type": "url",
                  "value": undefined,
                },
                "ref": null,
                "rendered": null,
                "type": "input",
              },
              Object {
                "instance": null,
                "key": undefined,
                "nodeType": "function",
                "props": Object {
                  "error": undefined,
                },
                "ref": null,
                "rendered": null,
                "type": [Function],
              },
            ],
            "type": "div",
          },
          Object {
            "instance": null,
            "key": undefined,
            "nodeType": "host",
            "props": Object {
              "children": "shorten url",
              "onClick": [Function],
              "type": "submit",
            },
            "ref": null,
            "rendered": "shorten url",
            "type": "button",
          },
        ],
        "type": "div",
      },
      "type": "div",
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

describe("<InputBar /> UI interactions", () => {
  it("simulates click events", () => {
    const mockCallBack = jest.fn();

    const button = shallow(<button onClick={mockCallBack} />);

    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  // using sinon module
  // it("simulates click events", () => {
  //   const mockCallBack = sinon.spy();

  //   const button = shallow(<button onClick={mockCallBack} />);

  //   button.find("button").simulate("click");
  //   expect(mockCallBack).toHaveProperty("callCount", 1);
  // });
});
