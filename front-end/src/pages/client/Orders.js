import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ClientMenu from '../../components/client/ClientMenu';
import { getUser } from '../../services/localStorage';
import { getUserSales } from '../../services/fetch';
import OrderCard from '../../components/client/newOrderCard';
import '../../css/client/orders.css'

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
    <div className="orders-big-container yellow-background">
      <ClientMenu title="Meus Pedidos" />
      <div className="orders-container">
      {orders.map((order, index) => <OrderCard order={ order } index={ index } key={ order } />)}
      </div>
    </div>
  );
}

export default Orders;
