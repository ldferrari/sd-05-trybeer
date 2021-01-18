import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import ClientMenu from '../../components/client/ClientMenu';
import { getProducts } from '../../services/fetch';
import TrybeerContext from '../../context/TrybeerContext';
import EachProduct from '../../components/client/newProductCard';
import '../../css/client/products.css';

function Products() {
  const [dataProducts, setDataProducts] = useState([]);
  const [isLogged, setIsLogged] = useState(true);
  const { totalPrice } = useContext(TrybeerContext);

  useEffect(() => {
    getProducts().then((result) => setDataProducts(result));
    if (localStorage.getItem('user') === null) setIsLogged(false);
  }, []);

  return (
    <section className="general-container-2 yellow-background">
      <ClientMenu title="TryBeer" />
      <div className="products-container">
        {/* {fetching && <p>Loading...</p>} */}
        {/* BACK - como ver que o fetch acabou? */}
        {dataProducts.map((product, index) => (
          <EachProduct product={ product } index={ index } key={ product } />
        ))}
      </div>
        <button
          className="waves-effect waves-light btn btn-layout-2"
          type="button"
          data-testid="checkout-bottom-btn"
          disabled={ !totalPrice }
        >
          <Link to="/checkout" className="white-text">
          Ver Carrinho
            </Link>
          <p data-testid="checkout-bottom-btn-value">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
              totalPrice,
            )}
            {/* fonte sobre currency https://developer.mozilla.org/en-US/docs/Web/Java/Reference/Global_Objects/Intl/NumberFormat/NumberFormat */}
          </p>
        </button>
      {!isLogged && <Redirect to="/login" />}
    </section>
  );
}

export default Products;
