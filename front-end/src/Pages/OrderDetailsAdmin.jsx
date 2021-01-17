import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Header from '../Components/Header';
import { totalPriceOfProducts } from '../Redux/Services';

const mockOrder = [
  {
    name: 'skol litraço de 4',
    quantity: 3,
    price: 4.12,
  },
  {
    name: 'brahma litraço de 4',
    quantity: 3,
    price: 4.23,
  },
  {
    name: 'barril',
    quantity: 4,
    price: 42.29,
  },
];

const decimals = 2;

const OrderDetailsAdmin = ({
  history,
  match: {
    params: { id },
  },
}) => {
  const [isPendente, setIsPendente] = useState(true);
  const total = totalPriceOfProducts(mockOrder);

  const setAsPendente = () => {
    // marcar como pendente na store e no banco

    // ---
    setIsPendente(false);
  };

  return (
    <div>
      <Header pathname={ history.location.pathname } />
      Admin - Detalhes do Pedido
      <h2 data-testid="order-number">
        Pedido
        {id}
      </h2>
      <h2 data-testid="order-status" style={ { color: isPendente ? 'yellow' : 'green' } }>
        {isPendente ? <p>Pendente</p> : <p>Entregue</p>}
      </h2>
      <div className="lista-dos-produtos">
        {mockOrder.map((product, index) => (
          // Usar component de card usado em outro requisito

          <div key={ product.name }>
            <span data-testid={ `${index}-product-qtd` }>
              {product.quantity}
              {' '}
              -
              {' '}
            </span>
            <span data-testid={ `${index}-product-name` }>
              {product.name}
              {' '}
            </span>
            <span data-testid={ `${index}-product-total-value` }>
              R$
              {parseFloat(product.price * product.quantity, decimals)}
            </span>
            <span data-testid="0-order-unit-price">
              (R$
              {product.price}
              {' '}
              un)
            </span>
          </div>
        ))}
        <div data-testid="order-total-value">
          Total: R$
          {total}
        </div>
      </div>
      {isPendente && (
        <button type="button" onClick={ () => setAsPendente() }>
          Marcar como entregue
        </button>
      )}
    </div>
  );
};

OrderDetailsAdmin.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default OrderDetailsAdmin;
