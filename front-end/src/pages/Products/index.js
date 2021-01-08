import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import Header from '../../components/header';
import Footer from '../../components/footer';

import Card from '../../components/productCard';
import AppContext from '../../context/AppContext';

const Products = () => {
  const { cart } = useContext(AppContext);
  const zero = 0;
  const dois = 2;
  const cartSum = cart
    .reduce((acc, cv) => acc + cv.price * cv.qty, zero)
    .toFixed(dois);

  const [theProducts, setProducts] = useState([]);
  const [cartBtn, setCartBtn] = useState(false);

  const fetchProducts = async () => {
    const { data } = await axios.get('http://localhost:3001/products');
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
    // console.log(theProducts);
  },
  [theProducts]);

  useEffect(() => {
    return (
      cartSum > zero ? setCartBtn(true) : setCartBtn(false)
    );
  },
  [cartSum]);

  const logged = localStorage.getItem('token');

  if (!logged) {
    return <Redirect to="/login" />;
  }

  const CartButton = () => {
    return (
      <div className="checkoutBtn">
        <Link
          to="/checkout"
          data-testid="checkout-bottom-btn"
          className="checkoutLink"
        >
          <p>Ver Carrinho</p>
          <p data-testid="checkout-bottom-btn-value">
            R$
            {cartSum}
          </p>
        </Link>
      </div>
    )
  };

  return (
    <div className="Products">
      <Header>TryBeer</Header>
      <div className="productList">
        { theProducts.map((product) => <Card key={ product.id } product={ product } />) }
        ,
      </div>
      { cartBtn && CartButton() }
      <Footer />
    </div>
  );
};

export default Products;
