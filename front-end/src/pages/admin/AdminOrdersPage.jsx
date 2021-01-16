import React, { useEffect, useState } from 'react';
import OrderCard from '../../components/admin/OrderCard';
import salesAPI from '../../services/admin/api';
import MenuAdm from '../../components/admin/MenuAdm';
// import '../../css/clientProductPage.css';

const AdminOrdersPage = () => {
  const [allOrders, setAllOrders] = useState([]);

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
    </div>
  );
};

export default AdminOrdersPage;
