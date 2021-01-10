import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Header from './Header';
import ProductCard from '../Components/ProductCard';

function Products({ products, totalPrice }) {
  return (
    <div>
      {/*<Header />*/}
      <h1>Produtos</h1>
      {products.map((product, key) =>
        <ProductCard
          key={key}
          product={product}
        />)}
      <Link to="/checkout">Ver carrinho {totalPrice}</Link>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.array,
  totalPrice: PropTypes.number,
};

const mapStateToProps = (state) => ({
  products: state.productsReducer.products,
  totalPrice: state.productsReducer.totalPrice,
});

export default connect(mapStateToProps)(Products);
