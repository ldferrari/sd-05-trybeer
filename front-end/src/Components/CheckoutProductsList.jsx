import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { repopulatingAct } from '../Redux/Actions';
import CheckoutProductCard from './CheckoutProductCard';
import helper from '../Helper/index';

const zero = 0;
// const toFixedParam = 2;

const CheckoutProductsList = ({ repopulatingStore, cart, setisTotalZero }) => {
  const total = cart.reduce(
    (acc, product) => acc + product.quantity * product.price,
    zero,
  );

  useEffect(() => {
    if (total <= zero) {
      setisTotalZero(true);
    }
  }, [total, setisTotalZero]);

  const triggerDelete = (index, productId) => {
    const cartClone = [...cart];
    cartClone.splice(index, 1);
    repopulatingStore(cartClone);

    helper.deleteProductFromLocalStorage(productId);
  };

  return (
    <div>
      {cart.map((item, index) => (
        <CheckoutProductCard
          key={ item }
          item={ item }
          i={ index }
          triggerDelete={ triggerDelete }
        />
      ))}
      <div data-testid="order-total-value">{`Total: R$ ${helper.transformPrice(total)}`}</div>
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

const mapStateToProps = (state) => ({
  cart: state.productsRequestReducer.cart,
});

const mapDispatchToProps = (dispatch) => ({
  repopulatingStore: (cart) => dispatch(repopulatingAct(cart)),
  // deleteProductFromStore: (productId) => dispatch(deleteProductFromStore(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutProductsList);
