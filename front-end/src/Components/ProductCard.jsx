import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increaseQuantityAct, decreaseQuantityAct, addToCartAct } from '../Redux/Actions';

function ProductCard({ key, product, increaseQuantity, decreaseQuantity }) {
  const { name, price, url_image } = product;
  return (
    <div>
      <div data-testid={`${key}-product-price`} >{price}</div>
      <img
        data-testid={`${key}-product-img`}
        src={url_image}
        alt={name}
      />
      <div data-testid={`${key}-product-name`}>{name}</div>
      <button
        type="button"
        onClick={() => {

          decreaseQuantity(key)
        }}
      >-</button>
      <span data-testid={`${key}-product-qtd`}>{}</span>
      <button
        type="button"
        onClick={() => {addToCartAct(product);}}
      >+</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  index: PropTypes.number,
  addToCart: PropTypes.func,
  increaseQuantity: PropTypes.func,
  decreaseQuantity: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCartAct(product)),
  increaseQuantity: (product) => dispatch(increaseQuantityAct(product)),
  decreaseQuantity: (product) => dispatch(decreaseQuantityAct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
