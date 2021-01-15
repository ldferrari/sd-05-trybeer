import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

export default function MausPedidosCard(props) {
  const { order, index } = props;
  const { id, total_price, sale_date } = order;
  const dois = 2;

  return (
    <Link to={`/orders/${ id }`}>
      <div data-testid={`${ index }-order-card-container`} className="cardConteiner">
        <a data-testid={`${ index }-order-number`}>Pedido { id }</a>
        <a data-testid={`${ index }-order-date`}>{ dateFormat(sale_date,'dd/mm') }</a>
        <a data-testid={`${ index }-order-total-value`}>R$ { total_price.replace('.', ',') }</a> 
      </div>
    </Link>
  )
}
