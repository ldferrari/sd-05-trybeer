import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increaseQuantityAct, decreaseQuantityAct } from '../Redux/Actions';
import Helpers from '../Helper/index';

const zero = 0;

function ProductCard({
  product,
  increaseQuantity,
  decreaseQuantity,
  cart,
}) {
  const [quantity, setQuantity] = useState(Helpers.verifyQuantity(JSON.parse(localStorage.getItem('cart')), product) || Helpers.verifyQuantity(cart, product) || zero);
  const {
    id, name, price, url_image: urlImage,
  } = product;
  return (
    <div>
      <div data-testid={ `${id - 1}-product-price` }>{`R$ ${Helpers.transformPrice(price)}`}</div>
      <img data-testid={ `${id - 1}-product-img` } src={ urlImage } alt={ name } />
      <div data-testid={ `${id - 1}-product-name` }>{ name }</div>
      <button
        type="button"
        data-testid={ `${id - 1}-product-minus` }
        onClick={ () => {
          decreaseQuantity(product);
          if (quantity > zero) setQuantity(quantity - 1);
          Helpers.decreaseProductToLocalStorage(product, quantity - 1);
        } }
      >
        -
      </button>
      <span data-testid={ `${id - 1}-product-qtd` }>{quantity}</span>
      <button
        type="button"
        data-testid={ `${id - 1}-product-plus` }
        onClick={ () => {
          increaseQuantity(product);
          setQuantity(quantity + 1);
          Helpers.addingProductToLocalStorage(product, quantity + 1);
        } }
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  cart: PropTypes.shape(Object).isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    url_image: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.productsRequestReducer.cart,
  totalPrice: state.productsRequestReducer.totalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  increaseQuantity: (product) => dispatch(increaseQuantityAct(product)),
  decreaseQuantity: (product) => dispatch(decreaseQuantityAct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
