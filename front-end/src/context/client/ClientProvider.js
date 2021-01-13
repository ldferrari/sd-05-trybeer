import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
// import ClientContext from './ClientContext';
// import productsApi from '../../services/client/api';

export const ClientContext = createContext();

const ClientProvider = ({ children }) => {
  const initialQuantity = 0;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);
  const [cartItens, setCartItens] = useState(localStorage.getItem('cart itens') || []);
  const [cart, setCart] = useState(localStorage.getItem('cart') || initialQuantity);

  const context = {
    email,
    setEmail,
    name,
    setName,
    products,
    setProducts,
    cart,
    setCart,
    cartItens,
    setCartItens,
  };

  return <ClientContext.Provider value={ context }>{children}</ClientContext.Provider>;
};

export default ClientProvider;

ClientProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};
