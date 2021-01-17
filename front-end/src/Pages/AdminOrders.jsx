import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminSideBar from '../Components/AdminSideBar';
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
       Admin - Orders
      <AdminSideBar />
      <div>
        <div>
          {orders && orders.map(
            { id, orderPrice, orderAddress, orderNumber, status },
            index
          ) => (
            <Link to={`/admin/orders/${id}`} >
              <div>
                <h4 className="product-card" data-testid={`${index}-order-number`}>
                    {`Pedido ${id}`}
                </h4>
                <h4 className="product-card" data-testid={`${index}-order-address`}>
                    {`Rua ${orderAddress} ${orderNumber}`}
                </h4>
              </div>
              <div>
                <h4 className="product-card" data-testid={`${index}-order-total-value`}>
                    {`R$ ${orderPrice}`}
                </h4>
              </div>
              <div className="order-status">
                {status}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
);

export default AdminOrders;
