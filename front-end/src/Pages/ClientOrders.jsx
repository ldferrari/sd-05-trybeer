import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import OrderCard from "../Components/OrderCard";
// import SideBar from "../Components/SideBar";
import { getClientOrder } from "../Redux/Services/index";
import { Redirect } from 'react-router-dom';

const Orders = ({ history }) => {
  const [ordersList, setOrdersList] = useState([]);
  const { id } = JSON.parse(localStorage.getItem("user"));
  
  useEffect(() => {
    getClientOrder(id).then((data) => setOrdersList(data));
  }, [id]);

  if (!id) return <Redirect to="/login" />;
  
  return (
    <div>
      <Header pathname={ history.location.pathname } />
      {ordersList.length < 1 && <span>Você não tem pedidos</span>}
      {ordersList.length > 1 && (
        <div className="container">
          <ul>
            {ordersList &&
              ordersList.map((order, index) => (
                <li>
                  <OrderCard order={order} index={index} />
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Orders;
