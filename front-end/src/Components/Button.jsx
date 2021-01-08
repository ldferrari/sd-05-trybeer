import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, disabled, onClick, test }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    data-testid={test}
  >
    {children}
  </button>
);
export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  test: PropTypes.string.isRequired,
};
