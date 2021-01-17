import PropTypes from 'prop-types';
import React from 'react';
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
// ++++++++++++++
function OrderDetails({
  history,
  match: {
    params: { id },
  },
}) {
  const data = '08/09';
  const total = totalPriceOfProducts(mockOrder);
  return (
    <div>
      <Header pathname={ history.location.pathname } />
      Cliente - Detalhes do Pedido
      <div>
        <h2 data-testid="order-number">
          Pedido
          {id}
        </h2>
        <h2 data-testid="order-date">{data}</h2>
      </div>
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
            <span>
              (R$
              {product.price}
              {' '}
              un)
            </span>
          </div>
        ))}
      </div>
      <div data-testid="order-total-value">
        Total: R$
        {total}
      </div>
    </div>
  );
}

OrderDetails.propTypes = {
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

export default OrderDetails;
