import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
// import AppContext from '../../context/AppContext';
import './index.css';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

const OrderCard = (props) => {
  const { order, index } = props;
  const { id, sale_date: saleDate } = order;
  const { setGlobalData } = useContext(AppContext);
  useEffect(() => {
    setGlobalData((state) => ({ ...state, [id]: saleDate }));
  }, [id, saleDate, setGlobalData]);
  return (
    <div className="oCard">
      <Link
        to={ `/orders/${id}` }
        className="cardz orderLink"
        key={ id }
        data-testid={ `${index}-order-card-container"` }
      >
        <p data-testid={ `${index}-order-number` } className="orderCardTitle">
          { `Pedido ${id}` }
        </p>
        <p data-testid={ `${index}-order-date` }>
          { saleDate }
        </p>
        <p data-testid={ `${index}-order-total-value` }>
          { `R$ ${order.total_price.toString().replace('.', ',')}` }
        </p>
      </Link>
    </div>
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
