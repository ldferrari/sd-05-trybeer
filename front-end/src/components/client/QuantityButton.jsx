import React, { useState } from 'react';

export default function QuantityButton() {
  const [quantity, setQuantity] = useState(0);

  function increaseItem() {
    setQuantity(quantity + 1);
  }

  function decreaseItem() {
    if (quantity > 0) setQuantity(quantity - 1);
  }

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
