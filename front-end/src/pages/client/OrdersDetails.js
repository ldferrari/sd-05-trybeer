import React, { useEffect, useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClientMenu from '../../components/client/ClientMenu';
import { getSaleById, getSaleDetails } from '../../services/fetch';
import OrderDetailCard from '../../components/client/OrderDetailCard';

function OrdersDetails({ location: { pathname } }) {
  const [isLogged, setIsLogged] = useState(true);
  // const [orderId, setOrderId] = useState('');
  const [orderInfo, setOrderInfo] = useState([]);
  const [productsDetails, setProductsDetails] = useState([]);

  const separateString = (string, separator) => {
    const arrayStrings = string.split(separator);
    return arrayStrings;
  };

  const getDate = (dateFormat) => {
    if (typeof dateFormat === 'string') {
      const zero = 0;
      const ten = 10;
      let date = dateFormat;
      date = date.substring(zero, ten);
      date = date.split('-');
      // console.log(date);
      return `${date[2]}/${date[1]}`;
    }
    return null;
  };

  useEffect(() => {
    if (localStorage.getItem('user') === null) setIsLogged(false);
  }, []);

  useEffect(() => {
    const array = separateString(pathname, '/');
    // console.log(array[2]);
    // setOrderId(array[2]);
    getSaleById(array[2]).then((result) => setOrderInfo(...result));
    getSaleDetails(array[2]).then((result) => setProductsDetails(result));
  }, [pathname]);

  const handlePrice = (price) => price.replace('.', ',');

  return (
    <div>
      <ClientMenu title="Detalhes de Pedido" data-testid="top-title" />
      {/* {console.log(orderInfo)} */}
      <div data-testid="order-number">
        Pedido
        {' '}
        {orderInfo.id}
      </div>
      <div data-testid="order-date">{getDate(orderInfo.sale_date)}</div>
      <div>
        {productsDetails.map((item, index) => (
          <OrderDetailCard key={ item } item={ item } index={ index } />
        ))}
      </div>
      {/* {console.log(productsDetails)} */}
      <div data-testid="order-total-value">
        Total: R$
        {' '}
        {!orderInfo.total_price ? null : handlePrice(orderInfo.total_price)}
      </div>
      {!isLogged && <Redirect to="/login" />}
    </div>
  );
}

OrdersDetails.propTypes = {
  location: PropTypes.node.isRequired,
};

export default withRouter(OrdersDetails);
