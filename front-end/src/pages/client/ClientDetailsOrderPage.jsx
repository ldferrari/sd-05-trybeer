import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../../components/client/Menu';
import fetchOrderDetails from '../../services/client/fetchOrderDetails';
import '../../css/client/clientDetailsOrderPage.css';

export default function ClientDetailsOrderPage(props) {
  const [order, setOrder] = useState('');
  const token = localStorage.getItem('token') || null;
  const zero = 0;
  const dois = 2;

  useEffect(() => {
    const { id } = props;
    fetchOrderDetails(id).then((data) => setOrder(data));
  }, [props]);

  if (!token) return <Redirect to="/login" />;
  return (
    <div>
      <Menu title="Detalhes de Pedido" />
      <div data-testid="0-order-card-container" className="datailsBody">
        <div className="datailPedido">
          <span data-testid="order-number">
            {order && `Pedido ${order.orderDetail[0].sale_id}`}
          </span>
          <span data-testid="order-date">
            {order && order.orderDetail[0].sale_date}
          </span>
        </div>
        {order && (
          order.orderDetail.map((product, index) => (
            <div key="fechalint" className="datailCard">
              {/* <span key="indice">{ `${index + 1}` }</span> */}
              <span data-testid={ `${index}-product-name` }>
                { `${product.name}` }
              </span>
              <span data-testid={ `${index}-product-qtd` }>
                { `Qtd: ${product.quantity}` }
              </span>
              <span data-testid={ `${index}-product-total-value` } className="datailValue">
                { `R$ ${product.total.toFixed(dois).replace('.', ',')}` }
              </span>
            </div>
          ))
        ) }
        {order && (
          <div data-testid="order-total-value" className="detailsTotal">
            {`Total R$ ${order.orderDetail
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
  id: PropTypes.string,
};

ClientDetailsOrderPage.defaultProps = {
  id: false,
};
