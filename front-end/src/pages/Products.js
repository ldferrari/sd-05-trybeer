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
    <section>
      <Header title="TryBeer" />
      <section className="products-list">
        { productsList
          && productsList.map((product, index) => (
            <Card
              index={ index }
              key={ product.id }
              image={ product.url_image }
              name={ product.name }
              price={ product.price }
            />
          )) }
        {/* carrinho soma atual */}
      </section>
    </section>
  );
};

export default Products;
