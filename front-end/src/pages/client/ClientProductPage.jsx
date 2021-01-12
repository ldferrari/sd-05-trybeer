import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ProdCard from '../../components/client/ProductCard';
import { ClientContext } from '../../context/client/ClientProvider';
import productsApi from '../../services/client/api';
import Menu from '../../components/client/Menu';

const Products = () => {
  const [products, setProducts] = useState([]);
  const {cart, setCart} = useContext(ClientContext);
  
  console.log(products);

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
      localStorage.setItem('cart', (cart).toString())
    }}, [cart]);

  useEffect(() => {
    productsApi().then(response => setProducts(response));
    const cartValue = (parseFloat(localStorage.getItem('cart')) || 0);
    setCart(cartValue)
  }, []);

  // useEffect(() => {
  //   productsApi().then(response => setProducts(response));
  //   const cartValue = (parseFloat(localStorage.getItem('cart')) || 0);
  //   setCart(cartValue)
  // }, []);
  
  console.log(products);
  // if (isLoading) return <div>Carregando...</div>;

  return (
    <div>
      <Menu title="Trybeer" />
      <div>
        {products.map((product, index) => (
          <ProdCard index={index} product={product} />
        ))}
      </div>
      <div>
        <button type="button" data-testid="checkout-bottom-btn">
          <Link to="/checkout">
            <button>
              Ver carrinho
              <span data-testid="checkout-bottom-btn-value">
              {cart}
              </span>
            </button>
          </Link>
        </button>
      </div>
    </div>
    //   {console.log(products)}
    // </div>
  );
};

export default Products;
