import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { getOrders } from '../services/api';

export default function Sales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const email = (localStorage.getItem('email') || '');
    const token = (localStorage.getItem('token') || '');
    getOrders(email, token).then((orders) => setSales(orders));
  }, []);

  const formatDate = (saleDate) => (
    new Date(saleDate).toLocaleDateString('pt-br', {
      day: '2-digit',
      month: '2-digit',
    })
  );

  return (
    <ul>
      {sales.map((sale, index) => (
        <Link to={ `/orders/${sale.id}` } key={ sale.id }>
          <li data-testid={ `${index}-order-card-container` }>
            <div>
              <span data-testid={ `${index}-order-number` }>
                Pedido
                {sale.id}
              </span>
              <span data-testid={ `${index}-order-date` }>{formatDate(sale.sale_date)}</span>
              <span data-testid={ `${index}-order-total-value` }>
                {`R$ ${sale.total_price.replace('.', ',')}`}
              </span>
            </div>
          </li>
          <br />
        </Link>
      ))}
    </ul>
  );
}
