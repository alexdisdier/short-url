import React from "react";

import "./Validation.css";

const validation = props => {
  let validationMessage = "Not a Valid URL";
  if (!props.error) {
    return <div className="error-message">{validationMessage}</div>;
  } else {
    return <div />;
  }
};

export default validation;
