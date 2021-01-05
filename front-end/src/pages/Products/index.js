import React from 'react';

import './index.css';

const Products = () => {
  return (
    <div className="productList">
      <ul>
        <li>
          <div>
            <img src={products.url} alt={products.name} />
            <p data-testid="0-product-name">{product.name}</p>
            <h4 data-testid="0-product-price">{product.price}</h4>
            <button data-testid="0-product-minus">-</button>
            <button data-testid="0-product-plus">+</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Products;