import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import ClientMenu from '../../components/client/ClientMenu';
import { getProducts } from '../../services/fetch';
import TrybeerContext from '../../context/TrybeerContext';
import EachProduct from './EachProduct';
import '../../css/client/products.css';
import './products.css'

function Products() {
  const [dataProducts, setDataProducts] = useState([]);
  const [isLogged, setIsLogged] = useState(true);
  const { totalPrice } = useContext(TrybeerContext);

  useEffect(() => {
    getProducts().then((result) => setDataProducts(result));
    if (localStorage.getItem('user') === null) setIsLogged(false);
  }, []);

  return (
    <section className="div-container-products yellow-background">
      <ClientMenu title="TryBeer"/>
      <div className="cards-container">
        {/* {fetching && <p>Loading...</p>} */}
        {/* BACK - como ver que o fetch acabou? */}
        {dataProducts.map((product, index) => (
          <EachProduct product={product} index={index} key={index} />
        ))}
      </div>
        <button
         className="btn-checkout"
          data-testid="checkout-bottom-btn"
          disabled={totalPrice===0}
        >
          <Link to="/checkout" className="white-text">
          Ver Carrinho
          </Link>
          <p data-testid="checkout-bottom-btn-value" className="white-text">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
              totalPrice
            )}
            {/* fonte sobre currency https://developer.mozilla.org/en-US/docs/Web/Java/Reference/Global_Objects/Intl/NumberFormat/NumberFormat */}
          </p>
        </button>
      {!isLogged && <Redirect to="/login" />}
    </section>
  );
}

export default Products;