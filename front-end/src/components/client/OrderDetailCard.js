import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getProductById } from '../../services/fetch';

export default function OrderCard({ item, index }) {
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    getProductById(item.product_id).then((result) => setProductDetail(...result));
  }, [item.product_id]);

  const handlePrice = (price) => price.replace('.', ',');

  return (
    <div>
      <p data-testid={ `${index}-product-qtd` }>
        {item.quantity}
        {' '}
        -
        {' '}
      </p>
      {/* {console.log(productDetail)} */}
      <p data-testid={ `${index}-product-name` }>{productDetail.name}</p>
      <p data-testid={ `${index}-product-total-value` }>
        R$
        {' '}
        {!productDetail.price ? null : handlePrice(productDetail.price)}
      </p>
    </div>
  );
}

OrderCard.propTypes = {
  item: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
};
