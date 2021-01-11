import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const zero = 0;
  const [userName, setUserName] = useState([]);
  const [userEmail, setUserEmail] = useState([]);
  const [beers, setBeers] = useState([]);
  const [total, setTotal] = useState(zero);

  const dataContext = {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    beers,
    setBeers,
    total,
    setTotal,
  };
  return <Context.Provider value={ dataContext }>{children}</Context.Provider>;
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
