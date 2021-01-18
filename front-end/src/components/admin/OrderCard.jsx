import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const OrderCard = (props) => {
  const { index, order } = props;
  const dois = 2;

  /* if (order.status === 'Entregue') {
    document.getElementsByClassName('orderStatus')[0].style.backgroundColor = '#008000';
  } */

  return (
    <div>
      <Link to={ `/admin/orders/${order.id}` } className="orderContainer">
        <p data-testid={ `${index}-order-number` }>
          <span>{ `Pedido ${order.id}` }</span>
        </p>
        <p data-testid={ `${index}-order-address` }>
          { `${order.delivery_address}, ${order.delivery_number} `}
        </p>
        <span data-testid={ `${index}-order-total-value` }>
          { `R$ ${Number(order.total_price).toFixed(dois).replace('.', ',')}` }
        </span>
        <p className={ order.status === 'Entregue' ? 'green orderStatus' : 'orderStatus' }>
          <p data-testid={ `${index}-order-status` }>{order.status}</p>
        </p>
      </Link>
    </div>
  );
};

export default OrderCard;

OrderCard.propTypes = {
  order: PropTypes.shape({
    total_price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    delivery_address: PropTypes.string.isRequired,
    delivery_number: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.string.isRequired,
};
