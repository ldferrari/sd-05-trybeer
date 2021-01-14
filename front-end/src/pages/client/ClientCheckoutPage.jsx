import React, { useState } from 'react';
import Menu from '../../components/client/Menu';

export default function ClientCheckoutPage() {
  const zero = 0;
  const cartItens = JSON.parse(localStorage.getItem('cart itens'));
  const totalValue = cartItens.reduce((acc, elem) => acc + (parseFloat(elem.price)), zero);
  const [total, setTotal] = useState(totalValue);

  const deleteProduct = () => {

  };

  return (
    <div>
      {/* <Menu title="Finalizar Pedido" /> */}
      { cartItens.map((product, index) => (
        <div key={ product.id }>
          <span data-testid={ `${index}-product-qtd-input` }>{product.quantity}</span>
          <span data-testid={ `${index}-product-name` }>{product.name}</span>
          <span data-testid={ `${index}-product-total-value` }>{` R$ ${(parseFloat(product.price)) * (parseFloat(product.quantity))}`}</span>
          <span data-testid={ `${index}-product-unit-price` }>{`-------(${product.price})`}</span>
          <button
            data-testid={ `${index}-removal-button` }
            type="button"
          >
            X
          </button>
        </div>)) }
      <div>
        <span data-testid="order-total-value">{`Total: R$ ${total}`}</span>
      </div>
      <div>
        <label htmlFor="street">
          Rua
          <input data-testid="checkout-street-input" id="street" type="text" />
        </label>
        <label htmlFor="number">
          Número da casa
          <input data-testid="checkout-house-number-input" id="number" type="text" />
        </label>
      </div>
      <button
        data-testid="checkout-finish-btn"
        type="button"
      >
        Finalizar Pedido
      </button>
    </div>
  );
}
