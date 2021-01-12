import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/OrderCard.css';

export default function OrderCard({ order, index }) {
  return (
    <div className="order-card">
      <Link className="order-link" to={ `/admin/orders/${order.id}` }>
        <p>
          Pedido 
          <span data-testid={ `${index}-order-number` }>{order.id}</span>
        </p>
        <p data-testid={ `${index}-order-address` }>
          {order.delivery_address},
          {order.delivery_number}
        </p>
        <p>
          R$
          <span data-testid={ `${index}-order-total-value` }>{order.total_price}</span>
        </p>
        <p data-testid={ `${index}-order-status` }>{order.status}</p>
      </Link>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
};
