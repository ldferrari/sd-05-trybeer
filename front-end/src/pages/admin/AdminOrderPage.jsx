import React, { useEffect, useState, useContext } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import OrderCard from '../../components/admin/OrderCard';
import salesAPI from '../../services/admin/api';
import MenuAdm from '../../components/admin/MenuAdm';
// import productsApi from '../../services/client/api';
// import '../../css/clientProductPage.css';

const AdminOrders = () => {
  const [ allOrders, setAllOrders ] = useState([]);

  useEffect(() => {
    salesAPI().then((response) => setAllOrders(response));
  }, []);

  return (
    <div>
      <MenuAdm />
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
