import React, { useContext, useEffect } from 'react';
import TryBeerContext from '../context/TryBeerContext';
import Header from '../components/Header';
import Card from '../components/Card';
import getAllProducts from '../services/ApiTrybeer';

const Products = () => {
  const { productsList, setProductList } = useContext(TryBeerContext);

  useEffect(() => {
    const products = getAllProducts();
    // console.log(products);
    return products ? setProductList(products) : [];
  }, []);

  return (
    <div>
      <Header title="TryBeer" />
      <div className="products-list">
        {productsList.map((element) => (
          <Card name={element} />
        ))}
        {/* carrinho soma atual */}
      </div>
    </div>
  );
};

export default Products;
