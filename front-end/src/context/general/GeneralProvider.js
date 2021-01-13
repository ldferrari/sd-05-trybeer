import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GeneralContext from './GeneralContext';

const GeneralProvider = ({ children }) => {
  const [initialUser] = useState({
    email: '',
    password: '',
    role: '',
    name: '',
  });
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    role: '',
    name: '',
  });

  const context = {
    initialUser,
    userData,
    setUserData,
  };

  return <GeneralContext.Provider value={ context }>{children}</GeneralContext.Provider>;
};

export default GeneralProvider;

GeneralProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};
