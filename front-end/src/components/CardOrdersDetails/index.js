import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

export default function CardOrderDetails(props) {
  const {
    order,
  } = props;

  const {
    id,
    address: delivery_address,
    number: delivery_number,
    price: total_price,
    status,
  } = order;
  return (
    <Link to="/admin/ordersDetails">
      <h4 data-testid={ `${order.id}-order-number` }>
        {`Pedido ${id}`}
      </h4>
      <h5 data-testid={ `${order.id}-order-address` }>{ `${address}, ${number}` }</h5>
      <h5 data-testid={ `${order.id}-order-total-value` }>{ `R$ ${price}` }</h5>
      <span data-testid={ `${order.id}-order-status` }>{ status }</span>
    </Link>
  );
}

CardOrderDetails.propTypes = {
  order: propTypes.instanceOf(Object).isRequired,
};
