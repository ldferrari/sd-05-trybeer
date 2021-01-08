import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

const CartButton = () => {
  const { cart } = useContext(AppContext);
  const [cartBtn, setCartBtn] = useState(false);
  const zero = 0;
  const dois = 2;
  const cartSum = cart
    .reduce((acc, cv) => acc + cv.price * cv.qty, zero)
    .toFixed(dois);

  useEffect(() => {
    return (
      cartSum > zero ? setCartBtn(true) : setCartBtn(false)
    );
  },
  [cartSum]);

  if(!cartBtn){
    return null
  }

  return (
    <div className="checkoutBtn">
      <Link
        to="/checkout"
        data-testid="checkout-bottom-btn"
        className="checkoutLink"
      >
        <p>Ver Carrinho</p>
        <p data-testid="checkout-bottom-btn-value">
          R$
          {cartSum}
        </p>
      </Link>
    </div>
  );
};

export default CartButton;
