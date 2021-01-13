import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TryBeerContext from './TryBeerContext';

const Provider = ({ children }) => {
  const noValue = 0;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(false);
  const [productsList, setProductList] = useState(['luca', 'hugo']);
  const [role, setRole] = useState('client');
  const [quantity, setQuantity] = useState(noValue);
  const [streetName, setStreetName] = useState('');
  const [houseNumber, setHouseNumber] = useState('');

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
    quantity,
    setQuantity,
    streetName,
    setStreetName,
    houseNumber,
    setHouseNumber,
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
