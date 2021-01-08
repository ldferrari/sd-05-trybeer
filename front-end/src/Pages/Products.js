import React from 'react';
// import Header from './Header';
import ProductCard from '../Components/ProductCard';

function Products({ products }) {
  return (
    <div>
      {/*<Header />*/}
      <h1>Produtos</h1>
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
};

export default Products;
