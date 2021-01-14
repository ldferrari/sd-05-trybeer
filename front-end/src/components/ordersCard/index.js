import React from 'react';
import PropTypes from 'prop-types';
// import AppContext from '../../context/AppContext';
import './index.css';
import { Link } from 'react-router-dom';

const OrderCard = (props) => {
  const { order, index } = props;
  return (
    <Link
      to={ `/orders/${order.id}` }
      className="card"
      key={ order.id }
      data-testid={ `${index}-order-card-container"` }
    >
      <p data-testid={ `${index}-order-number` }>{ order.id }</p>
      <p data-testid={ `${index}-order-date` }>
        { order.sale_date }
      </p>
      <p data-testid={ `${index}-order-total-value` }>R$ { order.total_price }</p>
    </Link>
  );
};

export default OrderCard;

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    sale_date: PropTypes.string,
    total_price: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
