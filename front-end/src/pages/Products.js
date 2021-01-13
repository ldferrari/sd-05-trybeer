import React, { useContext, useEffect } from 'react';
import TryBeerContext from '../context/TryBeerContext';
import Header from '../components/Header';
import Card from '../components/Card';
import { getAllProducts } from '../services/ApiTrybeer';

const Products = () => {
  const { productsList, setProductList } = useContext(TryBeerContext);
  const userData = JSON.parse(localStorage.getItem('user'));
  const token = userData && userData.token;

  useEffect(() => {
    getAllProducts(token)
      .then((products) => setProductList(products))
      .catch((err) => err);
  }, [setProductList, token]);

  return (
    <div>
      <Header title="TryBeer" />
      <div className="products-list">
        {productsList
          && productsList.map((product) => (
            <Card key={ product.id } name={ product.name } />
          ))}
        {/* carrinho soma atual */}
      </div>
    </div>
  );
};

export default Products;
