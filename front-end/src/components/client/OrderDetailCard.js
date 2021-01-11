import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getProductById } from '../../services/fetch';

export default function OrderCard({ item, index }) {
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    getProductById(item.product_id).then((result) =>
      setProductDetail(...result)
    );
  }, []);

  return (
    <div>
      <p data-testid={`${index}-product-qtd`}>{item.quantity} - </p>
      {console.log(productDetail)}
      <p data-testid={`${index}-product-name`}>{productDetail.name}</p>
      <p data-testid={`${index}-product-total-value`}>
        R$ {productDetail.price}
      </p>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.object.isRequired,
};
