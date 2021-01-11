import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClientContext from './ClientContext';
/* import productsApi from '../../services/client/api'; */

const ClientProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);

  const context = {
    email,
    setEmail,
    name,
    setName,
    products,
    setProducts,
  };

  // console.log(products);

  // useEffect(() => {
  //   productsApi()
  //     .then((products) => { setProducts(products) });
  // }, []);

  return <ClientContext.Provider value={ context }>{children}</ClientContext.Provider>;
};

export default ClientProvider;

ClientProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};
