import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, clickHandler, args }) {
  return (
    <button
      type="button"
      className={name}
      onClick={() => (args ? clickHandler(...args) : clickHandler(name))}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  args: PropTypes.arrayOf(PropTypes.string),
};

Button.defaultProps = {
  args: undefined,
};
