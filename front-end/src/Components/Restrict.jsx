import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import getUserData from '../Services/utils';

const Restrict = ({ children }) => {
  const [isLogged] = useState(getUserData());

  if (!isLogged) return <Redirect to="/login" />;

  return <div>{children}</div>;
};

Restrict.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Restrict;
