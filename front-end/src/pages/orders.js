import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

import { getOrders } from '../services/api';
import Sales from '../components/Sales';

export default function Orders() {
  const { email } = (localStorage.getItem('email') || '');
  const { token } = (localStorage.getItem('token') || '');
  const [sales, setSales] = useState(getOrders(email, token) || []);
  useEffect(() => {
    setSales(getOrders(email, token))
  }, []);
  return (
    <div>
      <Header>Meus Pedidos</Header>
      <Sales sales={sales} />
    </div>
  );
};
