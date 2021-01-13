import React, { useEffect, useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ProdCard from '../../components/client/ProductCard';
import { ClientContext } from '../../context/client/ClientProvider';
import productsApi from '../../services/client/api';
import Menu from '../../components/client/Menu';
import '../../css/clientProductPage.css';
import GeneralContext from '../../context/general/GeneralContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const {
    cart,
    setCart,
    cartItens,
    setCartItens,
  } = useContext(ClientContext);
  const token = localStorage.getItem('token') || null;
  const zero = 0;
  const dois = 2;

  console.log(products);

  useEffect(() => {

    if (cart >= zero) {
      localStorage.setItem('cart', (cart).toString());
    }
  }, [cart]);

  useEffect(() => {
    productsApi().then((response) => setProducts(response));
    const cartValue = (parseFloat(localStorage.getItem('cart')) || zero);
    setCart(cartValue);
    const cartIt = JSON.parse(localStorage.getItem('cart itens')) || [];
    localStorage.setItem('cart itens', JSON.stringify(cartIt));
    setCartItens(cartIt);
  }, []);

  if (!token) return <Redirect to="/login" />;

  return (
    <div>
      <Menu title="TryBeer" />
      <div className="listProducts marginTop">
        {products.map((product, index) => (
          <ProdCard index={ index } product={ product } />
        ))}
      </div>
      <div className="ver-carrinho">
        <Link to="/checkout" className="linkCar">
          <button
            type="button"
            data-testid="checkout-bottom-btn"
            className="buttonCart"
            disabled={ cartItens.length === zero }
          >
            Ver Carrinho
            <span data-testid="checkout-bottom-btn-value" className="somaCart">
              {` R$ ${Number(cart).toFixed(dois).replace('.', ',')}`}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
