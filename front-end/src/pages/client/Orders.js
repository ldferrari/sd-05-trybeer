import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ClientMenu from '../../components/client/ClientMenu';
import { getUser } from '../../services/localStorage';
import { getUserSales } from '../../services/fetch';
import OrderCard from '../../components/client/OrderCard';

function Orders() {
  const [isLogged, setIsLogged] = useState(true);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('user') === null) setIsLogged(false);
  }, []);
  useEffect(() => {
    const user = getUser();

    getUserSales(user.email).then((response) => setOrders(response));
  }, []);

  return (
    <div>
      <ClientMenu title="Meus Pedidos" />
      {orders.map((order, index) => <OrderCard order={ order } index={ index } key={ order } />)}
      {!isLogged && <Redirect to="/login" />}
    </div>
  );
}

export default Orders;
