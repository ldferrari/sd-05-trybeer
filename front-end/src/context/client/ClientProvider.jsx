import React, { useState } from 'react';
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

  return <ClientContext.Provider value={context}>{children}</ClientContext.Provider>;
};

export default ClientProvider;
