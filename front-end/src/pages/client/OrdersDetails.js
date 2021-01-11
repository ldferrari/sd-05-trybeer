import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import ClientMenu from '../../components/client/ClientMenu';
import { getSaleById, getSaleDetails } from '../../services/fetch';
import OrderDetailCard from '../../components/client/OrderDetailCard';

function OrdersDetails({ history, location: { pathname } }) {
  const [orderId, setOrderId] = useState('');
  const [orderInfo, setOrderInfo] = useState([]);
  const [date1, setDate1] = useState('21-01');
  const [productsDetails, setProductsDetails] = useState([]);

  const separateString = (string, separator) => {
    const arrayStrings = string.split(separator);
    return arrayStrings;
  };

  const getDate = (dateFormat) => {
    if (typeof dateFormat === 'string') {
      let date = dateFormat;
      date = date.substring(0, 10);
      date = date.split('-');
      console.log(date);
      return `${date[1]}/${date[2]}`;
    }
  };

  useEffect(() => {
    const array = separateString(pathname, '/');
    console.log(array);
    setOrderId(array[2]);
    getSaleById(array[2]).then((result) => setOrderInfo(...result));
    getSaleDetails(array[2]).then((result) => setProductsDetails(result));
  }, []);

  return (
    <div>
      <ClientMenu title="Detalhes de Pedido" data-testid="top-title" />
      {console.log(orderInfo)}
      <div data-testid="order-number">Pedido {orderInfo.id}</div>
      <div data-testid="order-date">{getDate(orderInfo.sale_date)}</div>
      <div>
        {productsDetails.map((item, index) => (
          <OrderDetailCard key={index} item={item} index={index} />
        ))}
      </div>
      {console.log(productsDetails)}
      <div data-testid="order-total-value">
        Total: R$ {orderInfo.total_price}
      </div>
    </div>
  );
}

export default withRouter(OrdersDetails);
