import React, { useContext } from 'react';
import TryBeerContext from '../context/TryBeerContext';
import Card from './Card';

const ProductsBody = () => {
  const { productsList } = useContext(TryBeerContext);
  return (
    <div className="products-list">
      { productsList.map((element) => <Card key={ element } name={ element } />) }
    </div>
  );
};

export default ProductsBody;
