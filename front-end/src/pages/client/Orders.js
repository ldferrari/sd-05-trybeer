import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import ClientMenu from '../../components/client/ClientMenu';
import { getUser } from '../../services/localStorage';
import { getUserSales } from '../../services/fetch';
import OrderCard from '../../components/client/OrderCard';

function Orders({ history }) {
  const [isLogged, setIsLogged] = useState(true);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('user') === null) setIsLogged(false);
  }, []);
  useEffect(() => {
    const user = getUser();
    if (!user) {
      return noUser();
    }
    getUserSales(user.email).then((response) => setOrders(response));
  }, []);

  const noUser = () => {
    return history.push("/login");
  }

  return (
    <div>
      <ClientMenu title="Meus Pedidos" />
      {orders.map((order, index) => <OrderCard order={ order } index={ index } key={ order } />)}
      {!isLogged && <Redirect to="/login" />}
    </div>
  );
}

export default withRouter(Orders);

Orders.propTypes = {
  history: PropTypes.arrayOf(Object).isRequired,
};
