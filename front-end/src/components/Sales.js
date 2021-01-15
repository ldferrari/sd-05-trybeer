import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { getOrders } from '../services/api';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const email = (localStorage.getItem('email') || '');
    const token = (localStorage.getItem('token') || '');
    getOrders(email, token).then((sales) => setOrders(sales));
  }, []);

  const formatDate = (saleDate) => (
    new Date(saleDate).toLocaleDateString('pt-br', {
      day: '2-digit',
      month: '2-digit',
    })
  );

  return (
    <ul>
      {orders.map((order, index) => (
        <Link to={ `/orders/${order.id}` } key={ order.id }>
          <li data-testid={ `${index}-order-card-container` }>
            <div>
              <span data-testid={ `${index}-order-number` }>
                {`Pedido ${order.id}`}
              </span>
              <span data-testid={ `${index}-order-date` }>{formatDate(order.sale_date)}</span>
              <span data-testid={ `${index}-order-total-value` }>
                {`R$ ${order.total_price.replace('.', ',')}`}
              </span>
            </div>
          </li>
          <br />
        </Link>
      ))}
    </ul>
  );
}
