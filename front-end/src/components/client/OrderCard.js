import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/OrderCard.css';

export default function OrderCard({ order, index }) {
  let date = order.sale_date;
  const zero = 0;
  const ten = 10;
  date = date.substring(zero, ten);
  date = date.split('-');

  return (
    <div className="order-card" data-testid={ `${index}-order-card-container` }>
      <Link className="order-link" to={ `/orders/${order.id}` }>
        <span data-testid={ `${index}-order-number` }>
          { `Pedido ${order.id}` }
        </span>
        <p data-testid={ `${index}-order-total-value` }>
          { `R$ ${(order.total_price).replace('.', ',')}` }
        </p>
        <p data-testid={ `${index}-order-date` }>{`${date[2]}/${date[1]}` }</p>
      </Link>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
};
