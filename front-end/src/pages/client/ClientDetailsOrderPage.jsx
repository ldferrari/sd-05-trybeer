import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../../components/client/Menu';
import fetchOrderDetails from '../../services/client/fetchOrderDetails';

export default function ClientDetailsOrderPage(props) {
  const [order, setOrder] = useState('');
  const token = localStorage.getItem('token') || null;
  const zero = 0;
  const dois = 2;

  useEffect(() => {
    fetchOrderDetails(props.match.params.id).then((data) => setOrder(data));
  }, [props.match.params.id]);

  if (!token) return <Redirect to="/login" />;
  return (
    <div>
      <Menu title="Cliente - Detalhes de Pedido" />
      <div data-testid="0-order-card-container">
        <div>
          <span data-testid="order-number">
            {order && `Pedido ${order.orderDetail[0].sale_id}`}
          </span>
          <span data-testid="order-date">
            {order && order.orderDetail[0].sale_date}
          </span>
        </div>
        {order && (
          order.orderDetail.map((product, index) => (
            <div key="fechalint">
              <span key="indice">{ `${index + 1}` }</span>
              <span data-testid={ `${index}-product-name` }>
                { `${product.name}` }
              </span>
              <span data-testid={ `${index}-product-qtd` }>
                { `${product.quantity}` }
              </span>
              <span data-testid={ `${index}-product-total-value` }>
                { `R$ ${product.total.toFixed(dois).replace('.', ',')}` }
              </span>
            </div>
          ))
        ) }
        {order && (
          <div data-testid="order-total-value">
            {`R$ ${order.orderDetail
              .reduce((total, product) => total + product.total, zero)
              .toFixed(dois)
              .replace('.', ',')}
            `}
          </div>
        )}
      </div>
    </div>
  );
}

ClientDetailsOrderPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

ClientDetailsOrderPage.defaultProps = {
  match: false,
}
