import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchOrderId } from '../services/ApiTrybeer';

export default function ClientOrderCard() {
  const [clientOrders, setClientOrders] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));
  const email = userData && userData.user && userData.user.email;

  useEffect(() => {
    fetchOrderId(email).then((sales) => setClientOrders(sales));
  }, [email]);

  return (
    <section>
      {clientOrders.map((order, index) => (
        <section data-testid={ `${index}-order-card-container` } key={ order.id }>
          <Link className="order-link" to={ `/orders/${order.id}` }>
            <span data-testid={ `${index}-order-number` }>
              { `Pedido ${order.id}` }
            </span>
            <p data-testid={ `${index}-order-total-value` }>
              { `R$ ${order.total_price.replace('.', ',')}` }
            </p>
            <p data-testid={ `${index}-order-date` }>
              { `${new Date(order.sale_date).toLocaleDateString('pt-br', {
                day: '2-digit',
                month: '2-digit',
              })}` }
            </p>
          </Link>
        </section>
      ))}
    </section>
  );
}
