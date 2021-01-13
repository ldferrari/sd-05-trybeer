import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer';
import CardOrder from '../../components/CardOrders';
import { getSales } from '../../services/requestAPI';

const OrderAdmin = (props) => {
  const [allOrders, setAllOrders] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      props.history.push("/login");
    }
    async function fetchProducts() {
      try {
        const { data } = await getSales(token);
        console.log(data);
        setAllOrders(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="Orders">
      <div className="pedido">
        <h2 className="checkoutitle">Pedidos Pendentes</h2>
        <div className="cartItems">
          {
            allOrders
              .map((item, index) => <CardOrder key={item.id} order={item} index={index} />)
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderAdmin;

/* OrderAdmin.propTypes = {
  history: propTypes.func.isRequired,
}; */
