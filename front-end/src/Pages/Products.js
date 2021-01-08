import React from 'react';
import PropTypes from 'prop-types';
// import Header from './Header';
import ProductCard from '../Components/ProductCard';

function Products({ products }) {
  return (
    <div>
      {/*<Header />*/}
      <h1>Produtos</h1>
      {products.map((product, index) =>
        <ProductCard
          key={product.id}
          product={product}
          index={index}
        />)}
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
