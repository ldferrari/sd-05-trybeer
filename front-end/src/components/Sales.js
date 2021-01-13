import React from 'react';
import { Link } from 'react-router-dom';

export default function Sales({ sales }) {
  // sales.forEach(sale => {
  const formatDate = (saleDate) => {
    return new Date(saleDate).toLocaleDateString('pt-br', {
      day: '2-digit',
      month: 'numeric',
    });
  };

  const formatPrice = (salePrice) => {
    return salePrice.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  // });
  return (
    <ul>
      {sales.map((sale, index) => (
        <Link to={`/orders/${sale.id}`}>
          <li data-testid={`${index}-order-card-container`}>
            <div>
              <span data-testid={`${index}-order-number`}>Pedido {sale.id}</span>
              <span data-testid={`${index}-order-date`}>{formatDate(sale.sale_date)}</span>
              <span data-testid={`${index}-order-total-value`}>
                {formatPrice(sale.total_price)}
              </span>
            </div>
          </li>
          <br />
        </Link>
      ))}
    </ul>
  );
}
