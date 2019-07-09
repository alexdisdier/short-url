import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import chai from "chai";
import sinonChai from "sinon-chai";

import "jest-localstorage-mock";

configure({ adapter: new Adapter() });
chai.use(sinonChai);

// Suppress react warnings
/* eslint-disable */
console.error = (warn => {
  return msg => {
    // Detect react warnings & error
    if (/^Warning: /.test(msg)) {
      if (
        // /^Warning: Failed prop type/.test(msg) ||
        /Always use lowercase HTML tags in React/.test(msg) ||
        /React does not recognize the/.test(msg)
      ) {
        return;
      }
      throw new Error(`React ${msg}`);
      return;
    } else {
      return warn(msg);
    }
  };
})(console.error);
/* eslint-enable */
