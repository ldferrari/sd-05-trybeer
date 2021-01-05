import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';

function Provider({ children }) {
  const [userName, setUserName] = useState([]);
  const [nomeProfile, setNomeProfile] = useState([]);
  const [emailProfile, setEmailProfile] = useState([]);

  const contextValue = {
    userName,
    setUserName,
    nomeProfile,
    setNomeProfile,
    emailProfile,
    setEmailProfile
  };
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
