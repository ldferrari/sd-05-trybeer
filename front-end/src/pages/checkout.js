import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import Cart from '../components/Cart';
import Header from '../components/Header';
import { orderPlaced } from '../services/api';

const Checkout = () => {
  const [nameAdress, setNameAdress] = useState('');
  const [numberAdress, setNumberAdress] = useState('');
  const [purchase, setPurchase] = useState(false);
  const history = useHistory();
  //  local alterar pra 10000
  const timeInterval = 7000;
  if (purchase) {
    setTimeout(() => history.push('/products'), timeInterval);
  }
  const successfulPurchase = (e) => {
    e.preventDefault();
    const { email, token, total } = localStorage;
    const cart = JSON.parse(localStorage.getItem('cart'));
    const order = {
      totalPrice: total,
      deliveryAddress: nameAdress,
      deliveryNumber: numberAdress,
      cart,
    };
    setPurchase(!purchase);
    orderPlaced(order, email, token);
  };
  const lsToken = localStorage.getItem('token');
  if (!lsToken) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Header>Finalizar Pedido</Header>
      <form id="form-checkout">
        <Cart />
        <h1>Endereço</h1>
        <label htmlFor="address">
          Rua:
          <input
            type="text"
            name="address"
            data-testid="checkout-street-input"
            id="address"
            value={ nameAdress }
            onChange={ (e) => setNameAdress(e.target.value) }
            required
          />
        </label>
        <label htmlFor="houseNumber">
          Número da casa:
          <input
            type="text"
            name="houseNumber"
            id="houseNumber"
            data-testid="checkout-house-number-input"
            value={ numberAdress }
            onChange={ (e) => setNumberAdress(e.target.value) }
            required
          />
        </label>
        <button
          type="submit"
          data-testid="checkout-finish-btn"
          disabled={ !nameAdress || !numberAdress }
          onClick={ (e) => successfulPurchase(e) }
        >
          Finalizar Pedido
        </button>
      </form>
      {purchase && <h1>Compra realizada com sucesso!</h1>}
    </div>
  );
};

export default Checkout;
