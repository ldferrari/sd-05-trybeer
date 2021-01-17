import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function OrderCard({ order, index }) {
  const saleDate = order.sale_date;
  const date = new Date(saleDate).toLocaleDateString('pt-br', {
    day: '2-digit',
    month: '2-digit',
  });

  return (
    <div className="order-card" data-testid={ `${index}-order-card-container` }>
      <Link className="order-link" to={ `/orders/${order.id}` }>
        <span data-testid={ `${index}-order-number` }>
          { `Pedido ${order.id}` }
        </span>
        <p data-testid={ `${index}-order-total-value` }>
          { `R$ ${order.total_price.replace('.', ',')}` }
        </p>
        <p data-testid={ `${index}-order-date` }>{`${date}`}</p>
      </Link>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
};
