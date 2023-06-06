import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, clickHandler }) {
  return (
    <button type="button" className="name" onClick={() => clickHandler(name)}>{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
