import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getOrderById } from '../services/api';
import Header from './Header';

const OrderDetails = (props) => {
  const zero = 0;
  const two = 2;
  const [products, setProducts] = useState([]);
  const [totalP, setTotalP] = useState(zero);
  const [dataSale, setDataSale] = useState('');
  const { match: { params: { id } } } = props;
  const formatDate = (saleDate) => (
    new Date(saleDate).toLocaleDateString('pt-br', {
      day: '2-digit',
      month: '2-digit',
    })
  );
  useEffect(() => {
    const token = (localStorage.getItem('token') || '');
    getOrderById(token, id).then((orders) => {
      setTotalP(orders[0].total_price);
      setDataSale(orders[0].sale_date);
      return setProducts(orders);
    });
  }, []);

  const lsToken = localStorage.getItem('token');
  if (!lsToken) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Header>Meus pedidos</Header>
      <table>
        <caption data-testid="order-number">
          {`Pedido ${id}`}
        </caption>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total price</th>
        </tr>
        {products.map((product, index) => (
          <tr key={ product.name }>
            <td data-testid={ `${index}-product-name` }>{product.name}</td>
            <td>{ `R$ ${product.price}` }</td>
            <td data-testid={ `${index}-product-qtd` }>{product.quantity}</td>
            <td data-testid={ `${index}-product-total-value` }>{`R$ ${(product.price * product.quantity).toFixed(two).replace('.', ',')}`}</td>
          </tr>
        ))}
      </table>
      {/* <p>{products[0]? products[0].total_price : 0}</p> */}
      <p data-testid="order-total-value">{`R$ ${String(totalP).replace('.', ',')}`}</p>
      <p data-testid="order-date">{formatDate(dataSale)}</p>
    </div>
  );
};
OrderDetails.propTypes = {
  match: PropTypes.number.isRequired,
  params: PropTypes.number.isRequired,
};
export default OrderDetails;
