import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
// import Header from '../../'

import data from './data';

const Products = () => {
  return (
    <div className="Products">
    {/* <Header>TryBeer</Header> */}
      <div className="productList">
        { data.products.map( product =>
          <div className="card">
            <img src={product.url_image} alt={product.name} data-testid={`${product.id-1}-product-img`}/>
            <p data-testid={`${product.id-1}-product-name`}>{product.name}</p> 
            <h4 data-testid={`${product.id-1}-product-price`}>R$ {product.price}</h4>
            <div className="cardBottom">
              <button data-testid={`${product.id-1}-product-minus`}>-</button>
              <p data-testid={`${product.id-1}-product-qtd`}> soma qty</p>
              <button data-testid={`${product.id-1}-product-plus`}>+</button>
            </div>
        </div>
          )
          }
      </div>
      <div className="checkoutBtn">
        <Link to="/checkout" data-testid="checkout-bottom-btn" className="checkoutLink">
          <p>Ver Carrinho</p>
          <p data-testid="checkout-bottom-btn-value">Valor dentro do cart</p>
        </Link>
      </div>
    {/* <Footer/> */}
    </div>
  )
};

export default Products;
