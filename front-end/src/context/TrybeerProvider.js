import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from './TrybeerContext';
// Caso for preciso fazer mais de um provider e contexto
// por critério de legibilidade de código,
// Não esquecer de ajustar o index.js geral.

const TrybeerProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [admin, setAdmin] = useState(false);
  const context = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    admin,
    setAdmin,
  };

  return <TrybeerContext.Provider value={ context }>{ children }</TrybeerContext.Provider>;
};

export default TrybeerProvider;

TrybeerProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};
