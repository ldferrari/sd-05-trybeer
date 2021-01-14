import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

export default function CardOrderDetails(props) {
  const {
    order,
  } = props;

  const {
    id, deliveryAddress, deliveryNumber, totalPrice, status,
  } = order;
  return (
    <Link to="/admin/ordersDetails">
      <h4 data-testid={ `${order.id}-order-number` }>
        {`Pedido ${id}`}
      </h4>
      <h5 data-testid={ `${order.id}-order-address` }>{ `${deliveryAddress}, ${deliveryNumber}` }</h5>
      <h5 data-testid={ `${order.id}-order-total-value` }>{ `R$ ${totalPrice}` }</h5>
      <span data-testid={ `${order.id}-order-status` }>{ status }</span>
    </Link>
  );
}

CardOrderDetails.propTypes = {
  order: propTypes.instanceOf(Object).isRequired,
};
