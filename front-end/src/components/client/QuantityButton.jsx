import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ClientContext } from '../../context/client/ClientProvider';

export default function QuantityButton(props) {
  const intialQuantity = 0;
  const [quantity, setQuantity] = useState(intialQuantity);
  const { cart, setCart } = useContext(ClientContext);
  const { price, index } = props;

  const updateCart = () => {
    localStorage.setItem('cart', (cart).toString());
  };

  function increaseItem() {
    setQuantity(quantity + 1);
    setCart(cart + Number(price));
    updateCart();
  }

  function decreaseItem() {
    if (quantity > intialQuantity) {
      setQuantity(quantity - 1);
      setCart(cart - Number(price));
    }
    updateCart();
  }

  return (
    <div className="quantity-container">
      <button
        type="button"
        className="product-decrease-quantity"
        data-testid={ `${index}-product-minus` }
        onClick={ () => { decreaseItem(); } }
      >
        -
      </button>
      <span
        className="cart-product-quantity"
        key="cart-product-quantity"
        data-testid="cart-product-quantity"
      >
        {quantity}
      </span>
      <button
        type="button"
        className="product-increase-quantity"
        data-testid={ `${index}-product-plus` }
        onClick={ () => { increaseItem(); } }
      >
        +
      </button>
    </div>
  );
}

QuantityButton.propTypes = {
  price: PropTypes.number.isRequired,
  product: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.string.isRequired,
};
