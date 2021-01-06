import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClientContext from './ClientContext';

const ClientProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const context = {
    email,
    setEmail,
    name,
    setName,
  };

  return <ClientContext.Provider value={ context }>{children}</ClientContext.Provider>;
};

export default ClientProvider;

ClientProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};
