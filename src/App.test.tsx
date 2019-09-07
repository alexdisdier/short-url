import React from "react";
import { shallow } from "enzyme";

import App from "./App";

jest.mock("./components/Header/Header", () => "Header");
jest.mock("./components/Table/Table", () => "Table");
jest.mock("./components/Loading/Loading", () => "Loading");

global.window = jest.fn(() => 1000);

const addEventListener = jest.fn();
global.window.addEventListener = () => addEventListener();

describe("App", () => {
  it("renders the App correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchInlineSnapshot(`
<div
  className="App"
>
  <Header
    addShort={[Function]}
    handleShort={[Function]}
    isValid={true}
    url=""
  />
  <Loading />
</div>
`);
  });
});
