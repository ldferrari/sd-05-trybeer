import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import getUserData from '../Services/utils';

const Restrict = ({ children }) => {
  const [isLogged, setIsLogged] = useState(true);

  // coloquei uma condicional para '/products',
  // estava causando loop infinito entre '/products' e '/login';

  const callUserData = async () => {
    const user = await getUserData();
    if (!user) {
      setIsLogged(false);
    }
  };

  useEffect(() => {
    callUserData();
  }, []);

  if (!isLogged) return <Redirect to="/login" />;

  return <div>{children}</div>;
};

Restrict.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  // pathname: PropTypes.string.isRequired,
};

export default Restrict;
