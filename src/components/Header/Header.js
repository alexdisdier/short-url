import React from 'react';
import PropType from 'prop-types';

import InputBar from './InputBar/InputBar';

import './Header.css';

const header = props => {
  const { url, isValid, addShort, handleShort } = props;
  return (
    <header>
      <h1 className="container">Simplify your links</h1>
      <InputBar
        url={url}
        isValid={isValid}
        addShort={addShort}
        handleShort={handleShort}
      />
    </header>
  );
};

header.propTypes = {
  url: PropType.string.isRequired,
  isValid: PropType.bool.isRequired,
  addShort: PropType.func.isRequired,
  handleShort: PropType.func.isRequired
};

export default header;
