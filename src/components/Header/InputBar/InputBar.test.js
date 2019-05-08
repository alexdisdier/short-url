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
