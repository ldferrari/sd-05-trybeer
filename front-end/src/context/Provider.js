import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TryBeerContext from './TryBeerContext';

const Provider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(false);
  const [productsList, setProductList] = useState([]);
  const [role, setRole] = useState('client');

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    checked,
    setChecked,
    productsList,
    setProductList,
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
