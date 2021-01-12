import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GeneralContext from './GeneralContext';

const GeneralProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    role: '',
    name: '',
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const context = {
    userData,
    setUserData,
    loggedIn,
    setLoggedIn,
  };

  return <GeneralContext.Provider value={ context }>{children}</GeneralContext.Provider>;
};

export default GeneralProvider;

GeneralProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};