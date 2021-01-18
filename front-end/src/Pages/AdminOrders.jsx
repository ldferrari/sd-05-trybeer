import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminSideBar from '../Components/AdminSideBar';
import { getSalesOrder } from '../Redux/Services/index';
import Helper from '../Helper/index';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getSalesOrder().then((result) => setOrders(result));
  }, []);

  return (
    <div>
      Admin - Pedidos
      <AdminSideBar />
      <div>
        <div>
          {orders
            && orders.map(
              (
                {
                  id: orderNumber,
                  total_price: orderPrice,
                  delivery_address: address,
                  delivery_number: addressNumber,
                  status,
                },
                index,
              ) => (
                <Link to={ `/admin/orders/${orderNumber}` } key={ orderNumber }>
                  <div>
                    <h4
                      className="product-card"
                      data-testid={ `${index}-order-number` }
                    >
                      {`Pedido ${orderNumber}`}
                    </h4>
                    <h4
                      className="product-card"
                      data-testid={ `${index}-order-address` }
                    >
                      {`${address}, ${addressNumber}`}
                    </h4>
                  </div>
                  <div>
                    <h4
                      className="product-card"
                      data-testid={ `${index}-order-total-value` }
                    >
                      {`R$ ${Helper.transformPrice(orderPrice)}`}
                    </h4>
                  </div>
                  <div
                    data-testid={ `${index}-order-status` }
                    className="order-status"
                  >
                    {status}
                  </div>
                </Link>
              ),
            )}
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
