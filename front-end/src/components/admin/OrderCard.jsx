import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

// import  from '../../services/api';

const OrderCard = (props) => {
  const { index, order } = props
  return (
    <div>
      <h4>Pedidos</h4>
      <div data-testid={ `${index}-order-number` }>
        id
      </div>
      <div data-testid={ `${index}-order-address` }>
        delivery_address
      </div>
      <div data-testid={ `${index}-order-total-value` }>
        total_price
      </div>
      <div>
        <span data-testid={ `${index}-order-status` }>
          status
        </span>
      </div>
    </div>
  );
};

export default OrderCard;
