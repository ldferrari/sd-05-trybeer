import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

export default function CardOrder(props) {
  const { setOrderDetails } = useContext(AppContext);

  const {
    order,
    index,
  } = props;

  const {
    id, delivery_address, delivery_number, total_price, status,
  } = order;

  setOrderDetails(order);

  return (
    <Link to="/admin/ordersDetails">
      <h4 data-testid={ `${index}-order-number` }>
        {`Pedido ${id}`}
      </h4>
      <h5 data-testid={ `${index}-order-address` }>{ `${delivery_address}, ${delivery_number}` }</h5>
      <h5 data-testid={ `${index}-order-total-value` }>{ `R$ ${total_price}` }</h5>
      <span data-testid={ `${index}-order-status` }>{ status }</span>
    </Link>
  );
}

CardOrder.propTypes = {
  order: propTypes.instanceOf(Object).isRequired,
  index: propTypes.number.isRequired,
};
