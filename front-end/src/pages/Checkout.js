import React, { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import TryBeerContext from '../context/TryBeerContext';
import Header from '../components/Header';
import { placeOrder } from '../services/ApiTrybeer';

const Checkout = () => {
  const {
    streetName, setStreetName, houseNumber, setHouseNumber,
  } = useContext(TryBeerContext);
  const [success, setSuccess] = useState(false);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const userData = JSON.parse(localStorage.getItem('user'));
  const email = userData && userData.user && userData.user.email;
  const role = userData && userData.user && userData.user.role;
  const token = userData && userData.token;
  const history = useHistory();

  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const saleDate = `${year}-${month}-${day}`;

  const noValue = 0;
  const decimals = 2;
  const delayTime = 1500;

  const priceCart = JSON.parse(localStorage.getItem('cart')) || [];
  const reducer = (sum, product) => sum + (+product.quantity * +product.price);
  const totalPrice = priceCart.reduce(reducer, noValue);

  const goToProducts = () => history.push('/products');

  const handleClick = (e) => {
    e.preventDefault();
    placeOrder(email, totalPrice, streetName, houseNumber, saleDate);
    setSuccess(!success);
    setTimeout(goToProducts, delayTime);
  };

  const removeItem = (e, index) => {
    e.preventDefault();
    const cartList = (JSON.parse(localStorage.getItem('cart')));
    cartList.splice(index, 1);
    setCartItems(cartList);
    localStorage.setItem('cart', JSON.stringify(cartList));
  };

  const detailsOrder = () => (cartItems.map((item, index) => (
    <>
      <h5 data-testid={ `${index}-product-qtd-input` }>{(JSON.parse(localStorage.getItem('cart'))[index].quantity)}</h5>
      <h5 data-testid={ `${index}-product-qtd-input` }>{item.quantity}</h5>
      <h5 data-testid={ `${index}-product-name` }>{item.name}</h5>
      <h5 data-testid={ `${index}-product-total-value` }>
        {`R$ ${(+item.quantity * +item.price).toFixed(decimals).replace('.', ',')}`}
      </h5>
      <h5 data-testid={ `${index}-product-unit-price` }>
        {`(R$ ${(item.price).replace('.', ',')} un)`}
      </h5>
      <button type="button" data-testid={ `${index}-removal-button` } onClick={ (e) => removeItem(e) }>X</button>
    </>
  ))
  );

  if (!token) return <Redirect to="/login" />;
  return (
    <section>
      <Header title={ role === 'client' ? 'Meu perfil' : 'Perfil' } />
      <h5>Produtos</h5>
      {detailsOrder()}
      <span>{totalPrice === noValue ? 'Não há produtos no carrinho' : ''}</span>
      <h5 data-testid="order-total-value">{`Total: R$ ${totalPrice.toFixed(decimals).replace('.', ',')}`}</h5>
      <form>
        <label htmlFor="checkout-street-input">
          Rua:
          <input
            type="text"
            data-testid="checkout-street-input"
            onChange={ (event) => setStreetName(event.target.value) }
          />
        </label>
        <label htmlFor="checkout-house-number-input">
          Número da casa:
          <input
            type="text"
            onChange={ (event) => setHouseNumber(event.target.value) }
            data-testid="checkout-house-number-input"
          />
        </label>
        <button
          type="submit"
          disabled={ !streetName || !houseNumber || totalPrice.toFixed(decimals).replace('.', ',') <= noValue }
          data-testid="checkout-finish-btn"
          onClick={ (event) => {
            handleClick(event);
          } }
        >
          Finalizar Pedido
        </button>
      </form>
      <span>{success && 'Compra realizada com sucesso!'}</span>
    </section>
  );
};

export default Checkout;
