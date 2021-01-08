import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Card from '../../components/productCard';
import CartButton from '../../components/cartButton';

const Products = () => {
  const [theProducts, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await axios.get('http://localhost:3001/products', {headers: {Authorization: localStorage.getItem("token")}});
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  },
  [theProducts]);

  const logged = localStorage.getItem('token');

  if (!logged) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="Products">
      <Header>TryBeer</Header>
      <div className="productList">
        { theProducts.map((product) => <Card key={ product.id } product={ product } />) }
        ,
      </div>
      <CartButton />
      <Footer />
    </div>
  );
};

export default Products;
