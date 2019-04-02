import React from "react";
import InputBar from "./InputBar/InputBar";

import "./Header.css";

const header = props => {
  return (
    <header>
      <h1 className="container">Simplify your links</h1>
      <InputBar />
    </header>
  );
};

export default header;
