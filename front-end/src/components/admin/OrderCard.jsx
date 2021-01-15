import React, { useEffect, useState, useContext } from 'react';

const OrderCard = (props) => {
  const { index, order } = props;
  const dois = 2; 

  return (
    <div>
      <p data-testid={`${index}-order-number`}>
        <span>{ `Pedido ${order.id}` }</span>
        {/* <span>1</span> */}
      </p>
      <p data-testid={`${index}-order-address`}>
        {order.delivery_address}, {order.delivery_number}
        {/* Rua teste, 25 */}
      </p>
      <p>
        <span data-testid={`${index}-order-total-value`}>
          {`R$ ${Number(order.total_price).toFixed(dois).replace('.', ',')}`}
        </span>
        {/* <span data-testid={`${index}-order-total-value`}>165,00</span> */}
      </p>
      <div>
        <p data-testid={`${index}-order-status`}>{order.status}</p>
        {/* <p data-testid={`${index}-order-status`}>PENDENTE</p> */}
      </div>
    </div>
  );
};

export default OrderCard;
