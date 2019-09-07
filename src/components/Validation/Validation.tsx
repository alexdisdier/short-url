import React from "react";

import "./Validation.css";

interface ValidationProps {
  error: boolean;
}

const validation: React.FC<ValidationProps> = ({ error }: ValidationProps) => {
  const validationMessage = "Not a Valid URL";
  if (!error) return <div className="error-message">{validationMessage}</div>;
  return <div />;
};

export default validation;
