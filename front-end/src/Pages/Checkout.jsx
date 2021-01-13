import PropTypes from 'prop-types';
import React from 'react';
import CheckoutProductsList from '../Components/CheckoutProductsList';
import Header from '../Components/Header';

const orderedProducts = [
  {
    name: 'Becks 330ml',
    price: 4.99,
    quantity: 3,
  },
  {
    name: 'Mockador Litraço de 4',
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

// A quantidade do produto deverá conter a tag data-testid="0-product-qtd-input"

// O nome do produto deverá conter a tag data-testid="0-product-name"

// O valor do produto deverá conter a tag data-testid="0-product-total-value"

// O preço unitário do produto deverá conter a tag data-testid="0-product-unit-price"

// O botão de remover um produto deverá conter a tag data-testid="0-removal-button"

// O valor total do carrinho deverá conter a tag data-testid="order-total-value"

// O campo input 'Rua' deverá conter a tag data-testid="checkout-street-input"

// O campo input 'Número da casa' deverá conter a tag data-testid="checkout-house-number-input"

// O botão 'Finalizar Pedido' deverá conter a tag data-testid="checkout-finish-btn"
