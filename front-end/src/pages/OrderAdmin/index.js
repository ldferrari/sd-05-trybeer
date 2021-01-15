import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Footer from '../../components/footer';
import CardOrder from '../../components/CardOrdersAdmin';
import AdminSideBar from '../../components/admin sidebar';
import { getSales } from '../../services/requestAPI';

const OrderAdmin = (props) => {
  const [allOrders, setAllOrders] = useState([]);
  const token = localStorage.getItem('token');
  const { history } = props;

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
    async function fetchProducts() {
      try {
        const { data } = await getSales(token);
        setAllOrders(data);
      } catch (error) {
        console.log(error);
      }
      return 'true';
    }
    fetchProducts();
  }, [token, history]);

  return (
    <div className="Orders">
      <AdminSideBar />
      <div className="pedido">
        <h2 className="checkoutitle">Pedidos Pendentes</h2>
        <div className="cartItems">
          {
            allOrders
              .map((item, index) => <CardOrder key={ item.id } order={ item } index={ index } />)
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderAdmin;

OrderAdmin.propTypes = {
  history: propTypes.func.isRequired,
};
