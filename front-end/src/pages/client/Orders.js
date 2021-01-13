import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ClientMenu from '../../components/client/ClientMenu';
import { getUser } from '../../services/localStorage';
import { getUserSales } from '../../services/fetch';
import OrderCard from '../../components/client/OrderCard';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
    const user = getUser();

    if (!user) {
      setIsLogged(false);
    } else {
      getUserSales(user.email).then((response) => setOrders(response));
    }
  }, []);

  if (!isLogged) return <Redirect to="/login" />;

  return (
    <div>
      <ClientMenu title="Meus Pedidos" />
      {orders.map((order, index) => <OrderCard order={ order } index={ index } key={ order } />)}
    </div>
  );
}

export default Orders;
