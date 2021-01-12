import React, { useContext, useEffect, useState } from 'react';
import { ClientContext } from '../../context/client/ClientProvider';
// import ClientProvider from '../../context/client/ClientProvider';

export default function QuantityButton(props) {
  const [quantity, setQuantity] = useState(0);
  const {cart, setCart} = useContext(ClientContext);
  const { price } = props;
  const { product, index } = props;

  const dois = 2;

  const updateCart = () => {
    localStorage.setItem('cart', (cart).toString());
  }

  // useEffect(() => {
  //   console.log(typeof cart);
  //   setCart(parseFloat(cart, 10));
  // }, [quantity]);
  
  function increaseItem() {
    setQuantity(quantity + 1);
    setCart(cart + Number(price));
    updateCart();
  }
  
  function decreaseItem() {
    if (quantity > 0) {
    setQuantity(quantity - 1);
    setCart(cart - Number(price));
    }
    updateCart();
  }
  console.log(cart);

  return (
    <div className="quantity-container">
      <button
        type="button"
        className="product-decrease-quantity"
        data-testid={ `${index}-product-minus` }
        onClick={() => { decreaseItem() }}
      >
        -
      </button>
      <span
        className="shopping-cart-product-quantity"
        key="shopping-cart-product-quantity"
        data-testid="shopping-cart-product-quantity"
      >
        {quantity}
      </span>
      <button
        type="button"
        className="product-increase-quantity"
        data-testid={ `${index}-product-plus` }
        onClick={() => { increaseItem() }}
      >
        +
      </button>
    </div>
  );
}
