import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';

const initialCard = () => {
  const localCart = localStorage.getItem('cart');
  return localCart ? JSON.parse(localCart) : [];
};

const updateCard = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

function Provider({ children }) {
  const [userName, setUserName] = useState('');
  const [nomeProfile, setNomeProfile] = useState('Eder Sena');
  const [emailProfile, setEmailProfile] = useState('');
  const [cart, setCart] = useState([]);
  const [globalData, setGlobalData] = useState({});
  const [orderDetails, setOrderDetails] = useState([]);
  const [alertCompraFinalizada, setAlertCompraFinalizada] = useState('');

  useEffect(() => { setCart(initialCard); }, []);
  useEffect(() => { updateCard(cart); }, [cart]);

  const contextValue = {
    userName,
    setUserName,
    nomeProfile,
    setNomeProfile,
    emailProfile,
    setEmailProfile,
    cart,
    setCart,
    orderDetails,
    setOrderDetails,
    globalData,
    setGlobalData,
    alertCompraFinalizada,
    setAlertCompraFinalizada,
  };
  return <AppContext.Provider value={ contextValue }>{ children }</AppContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
