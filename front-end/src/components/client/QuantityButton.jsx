import React, { useContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import AsyncLocalStorage from '@createnextapp/async-local-storage';
import { ClientContext } from '../../context/client/ClientProvider';

export default function QuantityButton(props) {
  const [quantity, setQuantity] = useState(0);
  const initialQuantity = 0;
  const {cart, cartItens, setCart, setCartItens} = useContext(ClientContext);
  const { id, index, price } = props;

  const updateCart = () => {
    localStorage.setItem('cart', (cart).toString());
    // localStorage.setItem('quantity', JSON.stringify([{index, qty}]));
  }

  const updateCartItens = async () => {
    await AsyncLocalStorage.setItem('cart itens', JSON.stringify(cartItens));
  };

  const altQuantity = useCallback( async (callback) => {    
    const prodIndex = cartItens.findIndex((i) => i.id === id);
    if (prodIndex !== -1) {
      if (quantity === 0) {
        cartItens.splice(index, 1);
      } else {
        cartItens[prodIndex] = {id, quantity};
      }
      setCartItens(cartItens);      
    } else {
      setCartItens([...cartItens, {id, quantity}]);
      console.log(2);
    }
    callback();
    // localStorage.setItem('cart itens', JSON.stringify(cartItens));
  }, [quantity, cartItens, setCartItens]);

  // useEffect(() => {
  //   setCartItens([]);
  //   const qteItens = JSON.parse(localStorage.getItem('cart itens')) || [];
  //   setCartItens(qteItens);
  //   localStorage.setItem('cart itens', []);
  // }, []);
  
  const increaseItem = useCallback(
    () => {
      setQuantity(quantity + 1);
      setCart(cart + Number(price));
      updateCart();
      altQuantity(updateCartItens);
    },
    [setQuantity, setCart, updateCart, altQuantity],
  );
  
  // async function increaseItem() {
  //   // setQty([...qty, {index, quantity}])
  //   setQuantity(quantity + 1);
  //   setCart(cart + Number(price));
  //   // console.log(prodIndex);
  //   updateCart();
  //   updateCartItens();
  //   // localStorage.setItem('cart itens', JSON.stringify(cartItens));
  //   // updateQuantity();
  // }

  function decreaseItem() {
    if (quantity > initialQuantity) {
      setQuantity(quantity - 1);
      setCart(cart - Number(price));
    }
    updateCart();
    altQuantity(updateCartItens);
    // localStorage.setItem('cart itens', JSON.stringify(cartItens));
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
  price: PropTypes.number.isRequired,
  product: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.string.isRequired,
};
