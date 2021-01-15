import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import OrderCard from '../../components/ordersCard';
// import CartButton from '../../components/cartButton';
import { postGetOrders } from '../../services/requestAPI';

const Orders = (props) => {
  // const { history } = props;
  const [theOrders, setOrders] = useState([]);
  // const theToken = localStorage.getItem('token');

  useEffect(() => {
    const { history } = props;
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
    }
    async function fetchOrders() {
      const { data } = await postGetOrders(token);
      setOrders(data);
    }
    fetchOrders();
  }, [props]);

  return (
    <div className="orders">
      <Header>Meus Pedidos</Header>
      <div className="ordersList">
        { theOrders.map((order, index) => (
          <OrderCard key={ order.id } order={ order } index={ index } />
        )) }
      </div>
      <Footer />
    </div>
  );
};

export default Orders;

Orders.propTypes = { history: PropTypes.instanceOf(Object).isRequired };
