import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Restrict from '../Components/Restrict';
import Header from '../Components/Header';
import Helper from '../Helper';
import { salesById } from '../Redux/Services';

const NOONE = 0;
const INITIAL = 0;

function OrderDetails({
  history,
  match: {
    params: { id },
  },
}) {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    salesById(id).then((data) => setOrder(data));
  }, [id]);

  const total = Helper.transformPrice(Helper.totalPriceOfProducts(order));
  const date = (order.length !== NOONE)
    ? Helper.transformDate(order[INITIAL].sale_date)
    : null;

  return (
    <Restrict>
      <Header pathname={ history.location.pathname } />
      <div>
        <h2 data-testid="order-number">
          Pedido
          {' '}
          {id}
        </h2>
        <h2 data-testid="order-date">{date}</h2>
      </div>
      <div className="lista-dos-produtos">
        {order.map((product, index) => (
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
              {' '}
              {Helper.transformPrice(product.price * product.quantity)}
            </span>
            <span>
              (R$
              {' '}
              {Helper.transformPrice(product.price)}
              {' '}
              un)
            </span>
          </div>
        ))}
      </div>
      <div data-testid="order-total-value">
        Total: R$
        {' '}
        {total}
      </div>
    </Restrict>
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
