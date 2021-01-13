import React, {
  useContext,
  useState,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import AsyncLocalStorage from '@createnextapp/async-local-storage';
import { ClientContext } from '../../context/client/ClientProvider';

export default function QuantityButton(props) {
  const initialQuantity = 0;
  const negativo = -1;
  const [quantity, setQuantity] = useState(initialQuantity);
  const {
    cart,
    cartItens,
    setCart,
    setCartItens,
  } = useContext(ClientContext);
  const { id, index, price } = props;

  const updateCart = () => {
    localStorage.setItem('cart', (cart).toString());
  };

  const updateCartItens = async () => {
    await AsyncLocalStorage.setItem('cart itens', JSON.stringify(cartItens));
  };

  const altQuantity = useCallback(async (callback) => {
    const prodIndex = cartItens.findIndex((i) => i.id === id);
    if (prodIndex !== negativo) {
      if (quantity === initialQuantity) {
        cartItens.splice(index, 1);
      } else {
        cartItens[prodIndex] = { id, quantity };
      }
      setCartItens(cartItens);
    } else {
      setCartItens([...cartItens, { id, quantity }]);
    }
    callback();
  }, [id, index, negativo, quantity, cartItens, setCartItens]);

  const increaseItem = useCallback(
    () => {
      setQuantity(quantity + 1);
      setCart(cart + Number(price));
      updateCart();
      altQuantity(updateCartItens);
    },
    [cart, price, quantity, updateCartItens, setQuantity, setCart, updateCart, altQuantity],
  );

  function decreaseItem() {
    if (quantity > initialQuantity) {
      setQuantity(quantity - 1);
      setCart(cart - Number(price));
    }
    updateCart();
    altQuantity(updateCartItens);
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
        data-testid={ `${index}-product-qtd` }
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
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.string.isRequired,
};
