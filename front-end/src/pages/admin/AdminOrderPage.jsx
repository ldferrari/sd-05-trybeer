import React, { useEffect, useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import getOrders from '../../services/admin/api';
import OrderCard from '../../components/admin/OrderCard';
import Menu from '../../components/client/Menu';
// import '../../css/clientProductPage.css';

const AdminOrders = () => {
  // const [ orders, setOrders ] = useState([]);

  // useEffect(() => {
  //   getAllSales().then((response) => setOrders(response));
  // }, []);

  return (
    <div>
      {/* <Menu title="TryBeer" /> */}
      {/* <Link to={ `/admin/orders/${order.id}` } > */}
        {/* {orders.map((index, order) => (
          <OrderCard key={ order.id } index={ index } order={ order } />
        ))} */}
        <OrderCard />
      {/* </Link> */}
    </div>
  );
};

export default AdminOrders;
