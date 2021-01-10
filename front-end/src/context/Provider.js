import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [userName, setUserName] = useState([]);
  const [userEmail, setUserEmail] = useState([]);
  const dataContext = {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
  };
  return <Context.Provider value={ dataContext }>{children}</Context.Provider>;
}
Provider.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Provider;
