import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';

function Provider({ children }) {
  const [userName, setUserName] = useState([]);
  const [nomeProfile, setNomeProfile] = useState([]);

  const contextValue = {
    userName,
    setUserName,
    nomeProfile,
    setNomeProfile,
  };
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
