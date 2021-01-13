import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CardOrder(props) {
  const {
    order,
    index,
  } = props;
  const {
    id, addressNumber, addressStreet, value, status,
  } = order;
  return (
    <Link to="/admin/ordersDetails">
      <h4 data-testid={ `${index}-order-number` }>
        {`Pedido ${id}`}
      </h4>
      <h5 data-testid={ `${index}-order-address` }>{ `${addressStreet}, ${addressNumber}` }</h5>
      <h5 data-testid={ `${index}-order-total-value` }>{ `R$ ${value}` }</h5>
      <span data-testid={ `${index}-order-status` }>{ status }</span>
    </Link>
  );
}

CardOrder.propTypes = {
  order: propTypes.instanceOf(Object).isRequired,
  index: propTypes.number.isRequired,
};
