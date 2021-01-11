import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './index.css';
import AppContext from '../../context/AppContext';
import Header from '../../components/header';
import Footer from '../../components/footer';
import CartItem from '../../components/cartItem';

const Checkout = () => {
  const [cartHere, setCartHere] = useState([]);
  // const theToken = localStorage.getItem("token");
  const logged = localStorage.getItem('token');
  const { cart } = useContext(AppContext)

  const zero = 0;
  const dois = 2;
  const cartSum = cart
    .reduce((acc, cv) => acc + cv.price * cv.qty, zero)
    .toFixed(dois);
  
  // const lCart = localStorage.getItem('cart');
  
  const fetchCart = () => {
    setCartHere(cart);
  };
  
  useEffect(() => {
    fetchCart();
  },
  [cartHere]);
  
  if (!logged) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="Checkout">
      <Header>Finalizar Pedido</Header>
      <div className='pedido'>
        <h2 className='checkoutitle'>Produtos no carrinho:</h2>
        <div className='legenda'>
          <p>QUANTIDADE</p>
          <p>PRODUTO</p>
          <p>PREÇO</p>
          <p>TOTAL</p>
          <p>EXCLUIR  </p>
        </div>
        <div className="cartItems">
          { cartHere.map((item, index) => <CartItem key={ item.id} item={ item } index={ index } />) }
        </div>
      </div>
      <h3 data-testid="order-total-value" className='total'>TOTAL: R$ { cartSum }</h3>
      <div className="deliveryForm">
        <h2 className="checkoutitle">Endereço:</h2>
        <div className='inputs'>
          <h4>Rua</h4>
          <input data-testid="checkout-street-input"/>
        </div>
        <div className='inputs'>
          <h4 data-testid="checkout-house-number-input">Número</h4>
          <input />
        </div>
      </div>
      <button data-testid="checkout-finish-btn" className='finishBtn'>
        Finalizar Pedido
      </button>
      <Footer />
    </div>
  );
};

export default Checkout;