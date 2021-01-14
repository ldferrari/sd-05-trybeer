import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { getClientOrder } from "../Redux/Services/index";

function Orders() {
  const [ordersList, setOrdersList] = useState(null);
  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getClientOrder(id).then((data) => setOrdersList(data));
  }, [id]);

  if (!currentUser) return <Redirect to="/login" />;

  return (
    <div>
      <Header pathname={history.location.pathname} />
      Cliente - Meus pedidos
      <SideBar />
      <p>{ordersList === null ? "Nenhum pedido" : "Loading"}</p>
    </div>
  );
}

Orders.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Orders;
