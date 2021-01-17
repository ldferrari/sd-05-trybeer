import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import { getSalesOrder } from '../Redux/Services/index';

const AdminOrders = () => (

  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    getSalesOrder().then((result) => setOrders(result));
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h1>Admin Orders</h1>
        <div>
          {orders && orders.map(
            // acho que é isso
            { id, orderPrice, orderAddress, orderNumber, status },
            index
          ) => (
            <Link to={`/admin/orders/${id}`} >
              <span className="product-card" data-testid={`${index}-order-card-container`}>
                  {`Pedido ${id}`}
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
  <>
    Admin - Orders
    <AdminSideBar />
  </>
);

export default AdminOrders;
