import React, { useContext } from 'react';
import TryBeerContext from '../context/TryBeerContext';
import Header from '../components/Header';
import Card from '../components/Card';

const Products = () => {
  const { productsList } = useContext(TryBeerContext);
  return (
    <div>
      <Header title="TryBeer" />
      <div className="products-list">
        { productsList.map((element) => (
          <Card key={ element } name={ element } />
        )) }
        {/* carrinho soma atual */}
      </div>
    </div>
  );
};

export default Products;
