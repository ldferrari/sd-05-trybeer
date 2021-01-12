import React, { useState, useContext } from 'react';
import { saveProductsLess } from '../services/localStorage';
import TrybeerContext from '../context/TrybeerContext';

export function CheckoutCard(props) {
  const { index, item } = props;
  const [quantity, setQuantity] = useState(item.quantity);
  const { setTotalPrice, totalPrice } = useContext(TrybeerContext);


  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
    saveProductsLess(item);
    setTotalPrice(totalPrice - Number(item.price));
  }

  return (
    <div className="checkout-card">
      <p data-testid={`${index}-product-qtd-input`}>{quantity}</p>
      <p data-testid={`${index}-product-name`}>{item.name}</p>
      <p data-testid={`${index}-product-total-value`}>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(quantity * item.price)}
      </p>
      <p data-testid={`${index}-product-unit-price`}>
        ({new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(item.price)} un)
      </p>
      <button data-testid={`${index}-removal-button`} onClick={() => decreaseQuantity()}>-</button>
    </div>
  );
}
