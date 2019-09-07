import React from "react";
import { shallow } from "enzyme";

import InputBar from "./InputBar";

describe("<InputBar /> rendering", () => {
  it("should render one input", () => {
    const wrapper = shallow(<InputBar />);
    expect(wrapper.find("input").length).toEqual(1);
  });

  it("should render one button", () => {
    const wrapper = shallow(<InputBar />);
    expect(wrapper.find("button").length).toEqual(1);
    expect(wrapper).toMatchInlineSnapshot(`
<div
  className="container"
>
  <div
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
  </div>
</div>
`);
  });
});
