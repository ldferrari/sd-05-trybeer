import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { updateStatus, getAdmOrderById } from '../services/api';

const OrdersAdminDetails = (props) => {
  const zero = 0;
  const two = 2;
  const { match: { params: { id } } } = props;
  const [order, setOrder] = useState([]);
  const [status, setStatus] = useState('Pendente');
  const { role, token } = localStorage;

  useEffect(() => {
    getAdmOrderById(role, id, token).then((sale) => setOrder(sale));
  }, []);

  const handleClick = () => {
    updateStatus(role, id, token).then(() => setStatus('Entregue'));
  };

  return (
    <div>
      <table>
        <caption data-testid="order-number">
          {`Pedido ${id}`}
        </caption>
        <span data-testid="order-status">{`${status}`}</span>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total price</th>
        </tr>
        {order.map((product, index) => (
          <tr key={ product.name }>
            <td data-testid={ `${index}-product-name` }>{product.name}</td>
            <td>{ `R$ ${product.price}` }</td>
            <td data-testid={ `${index}-order-qtd` }>{product.quantity}</td>
            <td data-testid={ `${index}-order-total-value` }>{`R$ ${(product.price * product.quantity).toFixed(two).replace('.', ',')}`}</td>
          </tr>
        ))}
      </table>
      <p data-testid="order-total-value">{order[0] ? `R$ ${String(order[0].total_price).replace('.', ',')}` : zero}</p>
      {status === 'Pendente' ? <button type="button" data-testid="mark-as-delivered-btn" onClick={ handleClick }>Marcar pedido como entregue</button> : null}
    </div>
  );
};

OrdersAdminDetails.propTypes = {
  match: PropTypes.number.isRequired,
  params: PropTypes.number.isRequired,
};
export default OrdersAdminDetails;
