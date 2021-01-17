import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import { fetchOrderId } from '../services/ApiTrybeer';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));
  const email = userData && userData.user && userData.user.email;
  const token = userData && userData.token;

  useEffect(() => {
    fetchOrderId(email).then((sales) => setOrders(sales));
  });

  if (!token) return <Redirect to="/login" />;
  return (
    <section>
      <Header title="Meus Pedidos" />
      {orders.map((order, index) => (
        <OrderCard index={ index } key={ order.id } order={ order } />
      ))}
    </section>
  );
}
