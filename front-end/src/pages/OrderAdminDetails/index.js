import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import Footer from '../../components/footer';
import CardOrderDetails from '../../components/CardOrdersDetails';
import { getSales } from '../../services/requestAPI';

const OrderAdminDetails = (props) => {
  const [allOrders, setAllOrders] = useState([]);
  const { orderDetails } = useContext(AppContext);
  console.log("orderDetails", orderDetails);
  // const token = localStorage.getItem('token');

  // useEffect(() => {
  //   if (!token) {
  //     props.history.push("/login");
    // }
  //   async function fetchProducts() {
  //     try {
  //       const { data } = await getSales(token);
  //       console.log(data);
  //       setAllOrders(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchProducts();
  // }, []);

  return (
    <div className="Orders">
      <div className="pedido">
        <h2 className="checkoutitle">Pedidos Pendentes</h2>
        <div className="cartItems">
          <CardOrderDetails order={orderDetails} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderAdminDetails;

/* OrderAdmin.propTypes = {
  history: propTypes.func.isRequired,
}; */
