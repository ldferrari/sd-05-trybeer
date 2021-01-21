import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Helpers from '../Helper/index';

function ProductCard({ product, onRefresh }) {
  const {
    id, name, price, url_image: urlImage,
  } = product;

  const [quantity, setQuantity] = useState(
    Helpers.getProductFromCartById(id)?.quantity,
  );

  return (
    <div>
      <div data-testid={ `${id - 1}-product-price` }>{`R$ ${Helpers.transformPrice(price)}`}</div>
      <img data-testid={ `${id - 1}-product-img` } src={ urlImage } alt={ name } />
      <div data-testid={ `${id - 1}-product-name` }>{ name }</div>
      <button
        type="button"
        data-testid={ `${id - 1}-product-minus` }
        onClick={ () => {
          setQuantity(Helpers.setProductToCart(product, -1));
          onRefresh();
        } }
      >
        -
      </button>
      <span data-testid={ `${id - 1}-product-qtd` }>
        { quantity || '0' }
      </span>
      <button
        type="button"
        data-testid={ `${id - 1}-product-plus` }
        onClick={ () => {
          setQuantity(Helpers.setProductToCart(product, 1));
          onRefresh();
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

export default ProductCard;
