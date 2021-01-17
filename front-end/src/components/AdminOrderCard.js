import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchAdminOrders } from '../services/ApiTrybeer';

export default function AdminOrderCard({ token }) {
  const [adminOrders, setAdminOrders] = useState([]);

  useEffect(() => {
    fetchAdminOrders(token).then((sales) => setAdminOrders(sales));
  }, [token]);

  return (
    <section>
      {adminOrders.map((order, index) => (
        <section data-testid={ `${index}-order-card-container` } key={ order.id }>
          <Link to={ `/admin/orders/${order.id}` }>
            <span data-testid={ `${index}-order-number` }>
              {`Pedido ${order.id}`}
            </span>
            <span data-testid={ `${index}-order-address` }>
              { `${order.delivery_address}, ${order.delivery_number}` }
            </span>
            <span data-testid={ `${index}-order-total-value` }>
              { `R$ ${order.total_price.replace('.', ',')}` }
            </span>
            <span data-testid={ `${index}-order-status` }>{order.status}</span>
          </Link>
        </section>
      ))}
    </section>
  );
}

AdminOrderCard.propTypes = {
  token: PropTypes.string.isRequired,
};
