import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type = 'text', placeholder, onChange, test, id, name }) => (
  <input
    data-testid={test}
    id={id}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
  />
);

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  test: PropTypes.string.isRequired,
};
