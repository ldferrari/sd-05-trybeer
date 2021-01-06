import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
// import Header from '../../'
import axios from 'axios';

import data from './data';

const Products = () => {
const [qty, setQty] = useState(0);
// const [produtos, setProdutos] = useState([]);

// useEffect(() => {
//  const fetchProducts = async () => {
//    const {data} = await axios.get("/api/products");
//    setProdutos(data);
//  }
//  fetchProducts();
//  return () => {
    //
//  }
// }, []);

  return (
    <div className="Products">
      {/* <Header>TryBeer</Header> */}
      <div className="productList">
        { data.products.map((product) =>
          <div className="card" key={ product.name }>
            <img src={ product.url_image } alt={ product.name } data-testid={ `${product.id - 1}-product-img` } />
            <p data-testid={ `${product.id - 1}-product-name` }>{ product.name }</p>
            <h4 data-testid={ `${product.id - 1}-product-price` }>
              R$
              { product.price }
            </h4>
            <div className="cardBottom">
              <button type="button" data-testid={ `${product.id - 1}-product-minus` } onClick={() => { setQty(qty - 1) }} >-</button>
              <p data-testid={ `${product.id - 1}-product-qtd` }>{qty}</p>
              <button type="button" data-testid={ `${product.id - 1}-product-plus` } onClick={() => { setQty(qty + 1) }}>+</button>
            </div>
          </div>,) },
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
