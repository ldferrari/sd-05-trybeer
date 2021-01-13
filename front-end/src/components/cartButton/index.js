import React, { useContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';

const CartButton = (props) => {
  const { cart } = useContext(AppContext);
  const [cartBtn, setCartBtn] = useState(false);
  const zero = 0;
  const dois = 2;
  const cartSum = cart
    .reduce((acc, cv) => acc + cv.price * cv.quantity, zero)
    .toFixed(dois);

  useEffect(() => {
    if (cartSum > zero) {
      return setCartBtn(true);
    }
    return setCartBtn(false);
  },
  [cartSum]);

  /* if (!cartBtn) {
    return null;
  } */

  return (
    <button
      type="button"
      data-testid="checkout-bottom-btn"
      className="checkoutBtn"
      disabled={ !cartBtn }
      onClick={ () => props.history.push('/checkout') }
    >
      <p>Ver Carrinho</p>
      <p data-testid="checkout-bottom-btn-value">
        {`R$ ${cartSum.toString().replace('.', ',')}`}
      </p>
    </button>
  );
};

export default CartButton;

CartButton.propTypes = {
  history: propTypes.instanceOf(Object).isRequired,
};
