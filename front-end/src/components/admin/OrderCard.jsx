import React, { useEffect, useState, useContext } from 'react';

const OrderCard = props => {
  const { index, order } = props;

  return (
    <div>
      <p data-testid={`${index}-order-number`}>
        Pedido
        {/* <span>{order.id}</span> */}
        <span>1</span>
      </p>
      <p data-testid={`${index}-order-address`}>
        {/* {order.delivery_address}, {order.delivery_number} */}
        Rua teste, 25
      </p>
      <p>
        R$
        {/* <span data-testid={`${index}-order-total-value`}>{order.total_price}</span> */}
        <span data-testid={`${index}-order-total-value`}>165,00</span>
      </p>
      <div>
        {/* <p data-testid={`${index}-order-status`}>{order.status}</p> */}
        <p data-testid={`${index}-order-status`}>PENDENTE</p>
      </div>
    </div>
  );
};

export default OrderCard;
