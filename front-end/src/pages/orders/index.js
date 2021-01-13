import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import OrderCard from '../../components/ordersCard';
// import CartButton from '../../components/cartButton';
import { postGetOrders } from '../../services/requestAPI';

const Orders = (props) => {
  // const { history } = props;
  const [theOrders, setOrders] = useState([]);
  const theToken = localStorage.getItem('token');

  useEffect(() => {
    async function fetchOrders() {
      const { data } = await postGetOrders(theToken);
      setOrders(data);
    }
    fetchOrders();
  }, [theToken]);

  const logged = localStorage.getItem('token');

  if (!logged) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="Products">
      <Header>Meus Pedidos</Header>
      <div className="ordersList">
        { theOrders.map((order, index) => <OrderCard key={ order.id } order={ order } index={ index } />) }
        ,
      </div>
      <Footer />
    </div>
  );
};

export default Orders;

Orders.propTypes = { history: PropTypes.instanceOf(Object).isRequired };
