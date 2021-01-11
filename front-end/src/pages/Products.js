import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductsBody from '../components/ProductsBody';

const Products = () => (
  <div>
    <Header title="TryBeer" />
    <Sidebar />
    <ProductsBody />
  </div>
);

export default Products;
