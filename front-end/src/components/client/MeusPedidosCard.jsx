import React from 'react';

export default function MausPedidosCard(props) {
  const { order, index } = props;
  const { user_id, total_price, sale_date } = order;
  return (
    <div data-testid={`${index}-order-card-container`} className="cardConteiner">
      <a data-testid={`${index}-order-number`}>pedido {user_id}</a>
      <a data-testid={`${index}-order-date`}>data da compra {sale_date}</a>
      <a data-testid={`${index}-order-total-value`}>R$ {total_price}</a> 
    </div>
  )
}
