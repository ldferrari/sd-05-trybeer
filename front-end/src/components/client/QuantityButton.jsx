import React, { useContext, useEffect, useState } from 'react';
import { ClientContext } from '../../context/client/ClientProvider';
// import ClientProvider from '../../context/client/ClientProvider';

export default function QuantityButton(props) {
  const [quantity, setQuantity] = useState(0);
  const {cart, setCart} = useContext(ClientContext);
  const { price } = props;

  const zero = 0;
  const dois = 2;

  useEffect(() => {
    setCart(parseFloat((cart + (quantity*price)).toFixed(dois)));
  }, [quantity]);
  
  function increaseItem() {
    setQuantity(quantity + 1);
  }
  
  function decreaseItem() {
    if (quantity > 0) setQuantity(quantity - 1);
    setCart(cart - (quantity*price));
  }
  console.log(cart);

  return (
    <div className="quantity-container">
      <button
        type="button"
        className="product-decrease-quantity"
        data-testid="product-decrease-quantity"
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
        data-testid="product-increase-quantity"
        onClick={() => { increaseItem() }}
      >
        +
      </button>
    </div>
  );
}
