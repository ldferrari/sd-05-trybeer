import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

export default function CardOrderDetails(props) {
  const {
    order,
  } = props;

  const {
    id, delivery_address, delivery_number, total_price, status,
  } = order;
  return (
    <Link to="/admin/ordersDetails">
      <h4 data-testid={ `${order.id}-order-number` }>
        {`Pedido ${id}`}
      </h4>
      <h5 data-testid={ `${order.id}-order-address` }>{ `${delivery_address}, ${delivery_number}` }</h5>
      <h5 data-testid={ `${order.id}-order-total-value` }>{ `R$ ${total_price}` }</h5>
      <span data-testid={ `${order.id}-order-status` }>{ status }</span>
    </Link>
  );
}

CardOrderDetails.propTypes = {
  order: propTypes.instanceOf(Object).isRequired,
  index: propTypes.number.isRequired,
};
