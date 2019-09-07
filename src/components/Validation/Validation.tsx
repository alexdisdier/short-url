import React from 'react';
import PropType from 'prop-types';

import './Validation.css';

const validation = props => {
  const { error } = props;

  const validationMessage = 'Not a Valid URL';
  if (!error) {
    return <div className="error-message">{validationMessage}</div>;
  }
  return <div />;
};

validation.propTypes = {
  error: PropType.bool
};

validation.defaultValue = {
  error: false
};

export default validation;
