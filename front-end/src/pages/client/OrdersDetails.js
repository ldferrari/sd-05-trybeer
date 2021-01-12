import React, { useEffect, useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import ClientMenu from '../../components/client/ClientMenu';
import { getSaleById, getSaleDetails } from '../../services/fetch';
import OrderDetailCard from '../../components/client/OrderDetailCard';

function OrdersDetails({ history, location: { pathname } }) {
  const [isLogged, setIsLogged] = useState(true);
  const [orderId, setOrderId] = useState('');
  const [orderInfo, setOrderInfo] = useState([]);
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
      // console.log(date);
      return `${date[2]}/${date[1]}`;
    }
  };

  useEffect(() => {
    if (localStorage.getItem('user') === null) setIsLogged(false);
  }, []);

  useEffect(() => {
    const array = separateString(pathname, '/');
    console.log(array[2]);
    setOrderId(array[2]);
    getSaleById(array[2]).then((result) => setOrderInfo(...result));
    getSaleDetails(array[2]).then((result) => setProductsDetails(result));
  }, []);

  const handlePrice = (price) => {
    return price.replace('.', ',')
  }

  return (
    <div className="div-container-orders yellow-background">
      <ClientMenu title="Detalhes de Pedido" data-testid="top-title" />
      {/* {console.log(orderInfo)} */}
      <div className="order-info-container">
        <div className="date-order">
      <h2 data-testid="order-number" className="white-text">Pedido {orderInfo.id}</h2>
      <h2 data-testid="order-date" className="white-text">{getDate(orderInfo.sale_date)}</h2>
        </div>
      <div className="order-detail-card-container">
        {productsDetails.map((item, index) => (
          <OrderDetailCard key={index} item={item} index={index} />
          ))}
      </div>
      {console.log(productsDetails)}
      <h2 data-testid="order-total-value" className="white-text">
        Total: R$ {!orderInfo.total_price ? null : handlePrice(orderInfo.total_price)}
      </h2>
      {!isLogged && <Redirect to="/login" />}
      </div>
    </div>
  );
}

export default withRouter(OrdersDetails);
