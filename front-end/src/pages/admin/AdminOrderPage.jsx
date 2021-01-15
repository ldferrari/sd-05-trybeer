import React, { useEffect, useState, useContext } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import OrderCard from '../../components/admin/OrderCard';
import salesAPI from '../../services/admin/api';
import Menu from '../../components/client/Menu';

const AdminOrders = () => {
  const [ allOrders, setAllOrders ] = useState([]);

  useEffect(() => {
    salesAPI().then((response) => setAllOrders(response));
  }, []);

  return (
    <div>
      {/* <Menu title="TryBeer" /> */}
        <div>
          {allOrders.map((order, index) => (
            <OrderCard key={ order.id } index={ index } order={ order } />
          ))}
        </div>
      {/* <Link to={ `/admin/orders/${order.id}` } > */}
      {/* </Link> */}
    </div>
  );
};

export default AdminOrders;
