import React from 'react';

function ProductCard({ product }) {
  const { name, price, url_image } = product;
  return (
    <div>
      <div>{price}</div>
      <img src={url_image} alt={name} />
      <div>{name}</div>
    </div>
  );
};

export default ProductCard;
