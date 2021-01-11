import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TryBeerContext from './TryBeerContext';

const Provider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('client');

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    role,
    setRole,
  };

  return (
    <TryBeerContext.Provider value={ contextValue }>
      {children}
    </TryBeerContext.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
