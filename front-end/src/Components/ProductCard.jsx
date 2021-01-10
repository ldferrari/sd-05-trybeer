import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increaseQuantityAct, decreaseQuantityAct } from '../Redux/Actions';

function ProductCard({ key, product, cart, increaseQuantity, decreaseQuantity }) {
  const [quantity, setQuantity] = useState(0);
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
          decreaseQuantity(product);
          if (quantity > 0) setQuantity(quantity - 1);
        }}
      >-</button>
      <span data-testid={`${key}-product-qtd`}>{quantity}</span>
      <button
        type="button"
        onClick={() => {
          increaseQuantity(product);
          setQuantity(quantity + 1);
        }}
      >+</button>
    </div >
  );
};

ProductCard.propTypes = {
  key: PropTypes.number,
  product: PropTypes.object,
  increaseQuantity: PropTypes.func,
  decreaseQuantity: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cart: state.productsReducer.cart,
  totalPrice: state.productsReducer.totalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  increaseQuantity: (product) => dispatch(increaseQuantityAct(product)),
  decreaseQuantity: (product) => dispatch(decreaseQuantityAct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
