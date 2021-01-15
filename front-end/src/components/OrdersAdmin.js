import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getOrdersAdmin } from '../services/api';

const OrdersAdmin = () => {
  const [orders, setOrders] = useState([]);
  const { token, role } = localStorage;
  useEffect(() => {
    getOrdersAdmin(role, token).then((ordersData) => setOrders(ordersData));
  }, []);

  return (
    <ul>
      {orders.map((order, index) => (
        <li data-testid={ `${index}-order-card-container` } key={ order.id }>
          <Link to={ `/admin/orders/${order.id}` } key={ order.id }>
            <div>
              <span data-testid={ `${index}-order-number` }>{`Pedido ${order.id}`}</span>
              <span data-testid={ `${index}-order-address` }>{`${order.delivery_address}, ${order.delivery_number}`}</span>
              <span data-testid={ `${index}-order-total-value` }>
                {`R$ ${order.total_price.replace('.', ',')}`}
              </span>
              <span data-testid={ `${index}-order-status` }>{order.status}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default OrdersAdmin;
