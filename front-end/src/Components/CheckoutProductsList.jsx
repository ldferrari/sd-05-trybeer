import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import CheckoutProductCard from './CheckoutProductCard';
import helper from '../Helper/index';

const zero = 0;
// const toFixedParam = 2;

const CheckoutProductsList = ({ cart }) => {

  return (
    <div>
      {(cart.itemArray || []).map((item, index) => (
        <CheckoutProductCard
          key={ item.id }
          item={ item }
          i={ index }
          triggerDelete={ () => {} }
        />
      ))}
      <div data-testid="order-total-value">{
        `Total: R$ ${helper.transformPrice(cart.total)}`
      }</div>
    </div>
  );
};

CheckoutProductsList.propTypes = {
  cart: PropTypes.shape({
    map: PropTypes.func,
    reduce: PropTypes.func,
  }).isRequired,
  repopulatingStore: PropTypes.func.isRequired,
  setisTotalZero: PropTypes.func.isRequired,
};

export default CheckoutProductsList;
