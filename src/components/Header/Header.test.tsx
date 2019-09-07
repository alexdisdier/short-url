import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

describe("Header", () => {
  const props = {
    url: "url",
    isValid: true,
    addShort: jest.fn(),
    handleShort: jest.fn()
  };

  describe("render()", () => {
    it("renders a header with an input bar", () => {
      const wrapper = shallow(<Header {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
<header>
  <h1
    className="container"
  >
    Simplify your links
  </h1>
  <inputBar
    addShort={[MockFunction]}
    handleShort={[MockFunction]}
    isValid={true}
    url="url"
  />
</header>
`);
    });
  });
});
