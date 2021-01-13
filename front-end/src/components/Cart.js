import React, { useEffect, useState } from 'react';

const Cart = () => {
  const zero = 0;
  const two = 2;
  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [refresh, setRefresh] = useState(false);
  const [total, setTotal] = useState(zero);

  // first load
  useEffect(() => {
    setTotal(() => Array.from(storage)
      .reduce((acc, product) => acc + product.qty * product.price, zero));
  }, []);
  // load on remove product
  useEffect(() => {
    setStorage(() => JSON.parse(localStorage.getItem('cart')) || []);
    setTotal(() => Array.from(storage)
      .reduce((acc, product) => acc + product.qty * product.price, zero));
  }, [refresh]);

  // track total
  useEffect(() => {
    localStorage.setItem('total', total);
  }, [total]);

  const removeFromCart = (index) => {
    storage.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(storage));
    // localStorage.setItem('beer', JSON.stringify(storage));
    setRefresh(!refresh);
  };
  return storage.length ? (
    <div>
      {storage.map((product, index) => (
        <div key={ product.name }>
          <div data-testid={ `${index}-product-name` }>{ product.name }</div>
          <div data-testid={ `${index}-product-qtd-input` }>{ product.qty }</div>
          <div data-testid={ `${index}-product-unit-price` }>
            {`(R$ ${product.price.replace('.', ',')} un)` }
          </div>
          <div data-testid={ `${index}-product-total-value` }>
            {`R$ ${(product.price * product.qty).toFixed(two).replace('.', ',')}`}
          </div>
          <button
            type="button"
            data-testid={ `${index}-removal-button` }
            onClick={ () => removeFromCart(index) }
          >
            X
          </button>
        </div>
      ))}
      <div data-testid="order-total-value">
        { `R$ ${total.toFixed(two).replace('.', ',')}` }
      </div>
    </div>
  ) : (
    <div>
      <h1>Não há produtos no carrinho</h1>
      <div data-testid="order-total-value">
        { `R$ ${total.toFixed(two).replace('.', ',')}` }
      </div>
    </div>
  );
};

export default Cart;
