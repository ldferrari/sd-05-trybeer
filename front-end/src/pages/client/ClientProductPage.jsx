import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProdCard from '../../components/client/ProductCard';
import { ClientContext } from '../../context/client/ClientProvider';
import productsApi from '../../services/client/api';
import Menu from '../../components/client/Menu';
import '../../css/clientProductPage.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(ClientContext);

  // const initialCart = localStorage.getItem('cart');

  // useEffect(() => {
  //   // const cartValue = (parseFloat(localStorage.getItem('cart')) || 0) + cart;
  //   // console.log(typeof cartValue);
  //   if (cart !== 0) {
  //     localStorage.setItem('cart', (cart).toString())
  //   }}, [cart]);

  useEffect(() => {
    // const cartValue = (parseFloat(localStorage.getItem('cart')) || 0) + cart;
    // console.log(typeof cartValue);
    if (cart >= 0) {
      localStorage.setItem('cart', (cart).toString());
    }
  }, [cart]);

  useEffect(() => {
    productsApi().then((response) => setProducts(response));
    const cartValue = (parseFloat(localStorage.getItem('cart')) || 0);
    setCart(cartValue);
  }, []);

  // useEffect(() => {
  //   productsApi().then(response => setProducts(response));
  //   const cartValue = (parseFloat(localStorage.getItem('cart')) || 0);
  //   setCart(cartValue)
  // }, []);

  // if (isLoading) return <div>Carregando...</div>;

  return (
    <div>
      <Menu title="Trybeer" />
      <div className="listProducts marginTop">
        {products.map((product, index) => (
          <ProdCard index={ index } product={ product } />
        ))}
      </div>
      <div className="ver-carrinho">
        <button type="button" data-testid="checkout-bottom-btn" className="buttonCart">
          <Link to="/checkout" className="linkCar">
            Ver carrinho
            <span data-testid="checkout-bottom-btn-value" className="somaCart">
            {cart}
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Products;
