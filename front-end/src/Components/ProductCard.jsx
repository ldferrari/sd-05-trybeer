import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product, index }) {
  const { name, price, url_image } = product;
  return (
    <div>
      <div data-testid={`${index}-product-price`} >{price}</div>
      <img
        data-testid={`${index}-product-img`}
        src={url_image}
        alt={name}
      />
      <div data-testid={`${index}-product-name`}>{name}</div>
      <button
        type="button"
        // onClick={() => increaseOrDecrease(product, false)}
      >-</button>
      <span data-testid={`${index}-product-qtd`}>{}</span>
      <button
        type="button"
        // onClick={() => increaseOrDecrease(product, false)}
      >+</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  index: PropTypes.number,
};

// const mapDispatchToProps = (dispatch) => ({

// });

export default ProductCard;
