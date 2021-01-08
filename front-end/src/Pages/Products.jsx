import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
      <Link to="/checkout" >Ver carrinho</Link>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.array,
};

const mapStateToProps = (state) => ({
  products: state.productsRequestReducer.products,
});

export default connect(mapStateToProps)(Products);
