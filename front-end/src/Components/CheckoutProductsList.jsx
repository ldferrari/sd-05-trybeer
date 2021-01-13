import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CheckoutProductCard from './CheckoutProductCard';

const mock = [
  {
    name: 'Becks 330ml',
    price: 4.99,
    quantity: 3,
  },
  {
    name: 'Litraço de 4',
    price: 8.89,
    quantity: 5,
  },
];

function CheckoutProductsList({ setisTotalZero }) {
  // provávelmente os produtos estarão vindo da STORE
  const [orderedProducts, setOrderedProducts] = useState(mock);

  const total = orderedProducts.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0,
  );

  useEffect(() => {
    if (total <= 0) {
      setisTotalZero(true);
    }
  }, [orderedProducts]);

  const triggerDelete = (index) => {
    let orderedProductsClone = [...orderedProducts];
    orderedProductsClone.splice(index, 1);
    setOrderedProducts(orderedProductsClone);
  };

  return (
    <div>
      {orderedProducts.map((item, index) => (
        <CheckoutProductCard
          item={item}
          i={index}
          triggerDelete={triggerDelete}
        />
      ))}
      <div data-testid="order-total-value">Total: R$ {total}</div>
    </div>
  );
}

CheckoutProductsList.propTypes = {
  setisTotalZero: PropTypes.func.isRequired,
};

export default CheckoutProductsList;
