import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TryBeerContext from './TryBeerContext';

const Provider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(false);

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    checked,
    setChecked,
  };

  return <TryBeerContext.Provider value={contextValue}>{children}</TryBeerContext.Provider>;
};

export default Provider;

Provider.prototype = {
  children: PropTypes.element.isRequired,
};
