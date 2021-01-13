import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TryBeerContext from './TryBeerContext';

const Provider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
<<<<<<< HEAD
  const [checked, setChecked] = useState(false);
  const [productsList, setProductList] = useState(['luca', 'hugo']);
=======
  const [role, setRole] = useState('client');
>>>>>>> d8cb8c0ba5e3dda59bb112adc7ae49945dbba79c

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
<<<<<<< HEAD
    checked,
    setChecked,
    productsList,
    setProductList,
=======
    role,
    setRole,
>>>>>>> d8cb8c0ba5e3dda59bb112adc7ae49945dbba79c
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
