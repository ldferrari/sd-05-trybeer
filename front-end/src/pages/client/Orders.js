import React, { useEffect, useState } from 'react';
import ClientMenu from '../../components/client/ClientMenu';
import { getUser } from '../../services/localStorage';
import { getUserSales } from '../../services/fetch';
import OrderCard from '../../components/client/OrderCard';

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const user = getUser();

    getUserSales(user.email).then((response) => setOrders(response));
  }, []);

  return (
    <div>
      <ClientMenu title="Meus Pedidos" />
      {orders.map((order, index) => <OrderCard order={ order } index={ index } />)}
    </div>
  );
}

export default Orders;
