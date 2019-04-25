import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { hello } from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe("hello", () => {
//   it("should output hello", () => {
//     expect(hello()).toBe("Hello");
//   });
// });
