import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

import axios from 'axios';

import data from './data';
import Card from '../../components/productCard';
import AppContext from '../../context/AppContext';

const Products = () => {

  const { cart, setCart } = useContext(AppContext);
  const cartSum = cart.reduce((acc, cv) => acc + cv.price * cv.qty, 0).toFixed(2);
  // const [produtos, setProdutos] = useState([]);

  // useEffect(() => {
  //  const fetchProducts = async () => {
  //    const {data} = await axios.get("/api/productinhos");
  //    setProdutos(data);
  //  }
  //  fetchProducts();
  //  return () => {
      //
  //  }
  // }, []);

  return (
    <div className="Products">
      <Header>TryBeer</Header>
      <div className="productList">
        { data.products.map((product) => <Card key={ product.id } product={ product } />) },
      </div>
      <div className="checkoutBtn">
        <Link to="/checkout" data-testid="checkout-bottom-btn" className="checkoutLink">
          <p>Ver Carrinho</p>
          <p data-testid="checkout-bottom-btn-value">
            R${cartSum}
          </p>
        </Link>
      </div>
      <Footer />
    </div>
  ),
};

export default Products;
