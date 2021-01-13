import React from 'react';

function CheckoutProductCard ()  {
  return (
    <div>
    <span data-testid={`${i}-product-qtd-input`}>{item.quantity}</span> -{' '}
    <span data-testid={`${i}-product-name`}>{item.name}</span>
    <span></span>


    </div>
  )
}

function CheckoutProductsList({ orderedProducts }) {
  return (
    <div>
      {orderedProducts.map((item, index) => (
        <CheckoutProductCard item={item} i={index}
      ))}
    </div>
  );
}

export default CheckoutProductsList;
