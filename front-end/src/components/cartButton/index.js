import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import propTypes from 'prop-types';

const CartButton = (props) => {
  const { cart } = useContext(AppContext);
  const [cartBtn, setCartBtn] = useState(false);
  const zero = 0;
  const dois = 2;
  const cartSum = cart
    .reduce((acc, cv) => acc + cv.price * cv.qty, zero)
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
    <div className="checkoutBtn">
      <button
        type="button"
        data-testid="checkout-bottom-btn"
        className="checkoutLink"
        disabled={ !cartBtn }
        onClick={ () => props.history.push('/checkout') }
      >
        <p>Ver Carrinho</p>
        <p data-testid="checkout-bottom-btn-value">
          {`R$ ${cartSum.toString().replace('.', ',')}`}
        </p>
      </button>
    </div>
  );
};

export default CartButton;

CartButton.propTypes = {
  history: propTypes.func.isRequired,
}