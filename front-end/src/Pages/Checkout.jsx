import PropTypes from 'prop-types';
import React from 'react';
import CheckoutProductsList from '../Components/CheckoutProductsList';
import Header from '../Components/Header';
import Input from '../Components/Input';

const orderedProducts = [
  {
    name: 'Becks 330ml',
    price: 4.99,
    quantity: 3,
  },
  {
    name: 'Litraço de 4',
    price: 8.89,
    quantity: 5,
  },
];

function Checkout({ history }) {
  return (
    <div>
      <Header pathname={history.location.pathname} />
      <h3>Produtos</h3>
      <CheckoutProductsList orderedProducts={orderedProducts} />
      <h3>Endereço</h3>
      <label htmlFor="rua">Rua:</label>
      <br />
      <Input test={'checkout-street-input'} id={'rua'} />
      <br />
      <label htmlFor="numero-da-casa">Número da casa:</label>
      <br />
      <Input test={'checkout-house-number-input'} id={'numero-da-casa'} />
      <button data-testid="checkout-finish-btn">FInalizar Pedido</button>
    </div>
  );
}

Checkout.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Checkout;
