
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminSideBar from '../Components/AdminSideBar';
import Header from '../Components/Header';
import { getSalesOrder } from '../Redux/Services/index';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    getSalesOrder().then((result) => setOrders(result));
  }, []);

  return (
    <div>
      <Header />
       Admin - Pedidos
      <AdminSideBar />
      <div>
        <div>
          {orders && orders.map((
            { orderBumber, orderPrice, address, adressNumber, status },
            index
          ) => (
            <Link to={`/admin/orders/${orderBumber}`} >
              <div>
                <h4 className="product-card" data-testid={`${index}-order-number`}>
                    {`Pedido ${orderBumber}`}
                </h4>
                <h4 className="product-card" data-testid={`${index}-order-address`}>
                    {`Rua ${address} ${adressNumber}`}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;