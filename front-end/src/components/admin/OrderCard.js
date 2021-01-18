import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/OrderCard.css';

export default function OrderCard({ order, index }) {
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('user') === null) setIsLogged(false);
  }, []);

  if (!isLogged) return <Redirect to="/login" />;

  return (
    <div class="row order-card-size-admin">
    <Link className="order-link" to={ `/admin/orders/${order.id}` }>
      <div class="col s12 m5 order-card-size-admin">
        <div class="card-panel white order-card-content">
          <span class="card-content" data-testid={ `${index}-order-number` }>{ `Pedido ${order.id}` }</span>
          <p data-testid={ `${index}-order-address` }>
          { `${order.delivery_address}, ${order.delivery_number}` }
          </p>
          <span data-testid={ `${index}-order-total-value` }>
          { `R$ ${(order.total_price).replace('.', ',')}` }
        </span>
        <p data-testid={ `${index}-order-status` } className={order.status === 'Pendente' ? "red-text" : "green-text"}>{order.status}</p>
        </div>
      </div>
      </Link>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    total_price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    delivery_address: PropTypes.string.isRequired,
    delivery_number: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.string.isRequired,
};
