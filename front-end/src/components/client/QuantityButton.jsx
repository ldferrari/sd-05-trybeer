import React, { useContext, useEffect, useState } from 'react';
import { ClientContext } from '../../context/client/ClientProvider';
// import ClientProvider from '../../context/client/ClientProvider';

export default function QuantityButton(props) {
  const [quantity, setQuantity] = useState(0);
  const {cart, cartItens, setCart, setCartItens} = useContext(ClientContext);
  const { id, index, price } = props;

  // const dois = 2;

  const updateCart = () => {
    localStorage.setItem('cart', (cart).toString());
    // localStorage.setItem('quantity', JSON.stringify([{index, qty}]));
  }

  // const updateQuantity = () => {
  //   setQuantity(quantity + 1);
  // }

  // useEffect(() => {
  //   console.log(typeof cart);
  //   setCart(parseFloat(cart, 10));
  // }, [quantity]);

  useEffect(() => {
    // const qty = JSON.parse(localStorage.getItem('quantity')) || {};
    // console.log(qty);
    // qty[index]=quantity;
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
    localStorage.setItem('cart itens', JSON.stringify(cartItens));
  }, [quantity, cartItens]);

  useEffect(() => {
    setCartItens([]);
    const qteItens = JSON.parse(localStorage.getItem('cart itens')) || [];
    setCartItens(qteItens);
    localStorage.setItem('cart itens', []);
  }, []);
  
  function increaseItem() {
    // setQty([...qty, {index, quantity}])
    setQuantity(quantity + 1);
    setCart(cart + Number(price));
    // console.log(prodIndex);
    updateCart();
    localStorage.setItem('cart itens', JSON.stringify(cartItens));
    // updateQuantity();
  }
  
  function decreaseItem() {
    if (quantity > 0) {
    setQuantity(quantity - 1);
    setCart(cart - Number(price));
    }
    updateCart();
    localStorage.setItem('cart itens', JSON.stringify(cartItens));
  }

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
