import React, { useEffect, useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Header from '../components/Header';
import { getProducts } from '../services/api';
import Context from '../context/Context';
import './css/products.css';

const Products = () => {
  const {
    beers,
    setBeers,
    total,
    setTotal,
    cart,
    setCart,
  } = useContext(Context);

  const [cartBtn, setCartBtn] = useState(false);
  const tam = 0;
  const casasDecimais = 2;

  async function starter() {
    await getProducts(localStorage.getItem('email'), localStorage.getItem('token'))
      .then((data) => setBeers(data));
    const lsCart = localStorage.getItem('cart');
    const lsBeer = localStorage.getItem('beer');
    if (lsCart && lsCart.length > tam) {
      setCart(JSON.parse(lsCart));
    }
    if (lsBeer && lsBeer.length > tam) {
      setBeers(JSON.parse(lsBeer));
    } else {
      localStorage.setItem('beer', beers);
    }
  }
  useEffect(() => {
    starter();
  }, []); // eslint-disable-line

  useEffect(() => {
    setTotal(
      cart
        .map((products) => products.qty * products.price)
        .reduce((a, b) => a + b, tam)
        .toFixed(casasDecimais)
        .replace('.', ','),
    );
    // localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart, setTotal]);

  async function setCarrinho() {
    await setCart(beers.filter((beer) => beer.qty !== tam));
    setCartBtn(true);
  }

  const handleClick = (e, operation, index) => {
    e.preventDefault();
    if (operation === 'add') {
      const velho = [...beers];
      velho[index].qty += 1;
      setBeers(velho);
      localStorage.setItem('beer', JSON.stringify(velho));
    }
    if (operation === 'sub' && beers[index].qty !== tam) {
      const velho = [...beers];
      velho[index].qty -= 1;
      setBeers(velho);
      localStorage.setItem('beer', JSON.stringify(velho));
    }
    setCarrinho();
  };
  if (cart.length > tam) localStorage.setItem('cart', JSON.stringify(cart));
  const lsToken = localStorage.getItem('token');
  if (!lsToken) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="background">
      <Header>Products</Header>
      <div className="corpo">
        <button className="verCarrinho" disabled={ !cartBtn } type="submit" data-testid="checkout-bottom-btn">
          <Link to="/checkout">
            Ver Carrinho
          </Link>
        </button>
        <span data-testid="checkout-bottom-btn-value">{`Preço total: R$ ${total}`}</span>
        {beers.map((element, index) => (
          <div key={ element.name }>
            <p data-testid={ `${index}-product-name` }>{element.name}</p>
            <p data-testid={ `${index}-product-price` }>{`R$ ${element.price.replace('.', ',')}`}</p>
            <img
              data-testid={ `${index}-product-img` }
              width="50px"
              height="50px"
              src={ element.url_image }
              alt={ element.name }
            />
            <button
              type="button"
              onClick={ (e) => handleClick(e, 'sub', index) }
              data-testid={ `${index}-product-minus` }
            >
              -
            </button>
            <button
              onClick={ (e) => handleClick(e, 'add', index) }
              data-testid={ `${index}-product-plus` }
              type="button"
            >
              +
            </button>
            <span data-testid={ `${index}-product-qtd` } id={ `product-${index}` }>
              {element.qty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
