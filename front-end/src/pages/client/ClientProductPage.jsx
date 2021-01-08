import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ProdCard from '../../components/client/ProductCard';
// import ClientContext from '../../context/client/ClientContext';
import productsApi from '../../services/client/api';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const prodAPI = productsApi().then(response => setProducts(response));
  }, []);

  // if (isLoading) return <div>Carregando...</div>;

  return (
    <div>
      <div>
        {products.map(product => (
          <ProdCard key={product.id} product={product} />
        ))}
        ,
      </div>
      <div>
        <button type="button" data-testid="checkout-bottom-btn">
          <Link to="/checkout">Ver carrinho // valor data-testid="checkout-bottom-btn-value"</Link>
        </button>
      </div>
    </div>
    //   {console.log(products)}
    // </div>
  );
};

export default Products;
