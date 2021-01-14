import React from 'react';
import Menu from '../../components/client/Menu';

export default function ClientCheckoutPage() {
  const cartItens = JSON.parse(localStorage.getItem('cart itens'));
  return (
    <div>
      <Menu title="Finalizar Pedido" />
      { cartItens.map((product) => (
        <div key={ product.id }>
          <p>{product.name}</p>
        </div>)) }
    </div>
  );
}
