import React, { useState } from 'react';
import clientContext from './clientContext';

const clientProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const context = {
    email,
    setEmail,
    name,
    setName,
  };

  return <clientContext.Provider value={context}>{children}</clientContext.Provider>;
};

export default clientProvider;
