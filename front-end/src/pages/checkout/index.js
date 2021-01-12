import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './index.css';
import AppContext from '../../context/AppContext';
import Header from '../../components/header';
import Footer from '../../components/footer';
import CartItem from '../../components/cartItem';
import { postOrder } from '../../services/requestAPI';

const Checkout = (props) => {
  const [cartHere, setCartHere] = useState([]);
  const [rua, setRua] = useState();
  const [numero, setNumero] = useState();
  // const theToken = localStorage.getItem("token");
  const logged = localStorage.getItem('token');
  const { cart, setCart } = useContext(AppContext);

  const nada = 0;
  const dois = 2;
  const cartSum = cart
    .reduce((acc, cv) => acc + cv.price * cv.qty, nada)
    .toFixed(dois);

  // const lCart = localStorage.getItem('cart');

  const fetchCart = () => {
    setCartHere(cart);
  };

  useEffect(() => {
    fetchCart();
  },
  [cartHere]);

  if (!logged) {
    return <Redirect to="/login" />;
  }

  const handleSubmit = async () => {
    const cartProducts = { products: [cart] };
    const userData = { deliveryAddress: rua, deliveryNumber: numero };
    await postOrder(cartProducts, userData);
    // alert(userData);
    localStorage.removeItem('cart');
    setCart([]);

    // <Redirect to="/products" />
    return props.history.push('/products'); // handleHandleSubmit
  };

  return (
    <div className="Checkout">
      <Header>Finalizar Pedido</Header>
      <div className="pedido">
        <h2 className="checkoutitle">Produtos no carrinho:</h2>
        <div className="legenda">
          <p>QUANTIDADE</p>
          <p>PRODUTO</p>
          <p>PREÇO</p>
          <p>TOTAL</p>
          <p>EXCLUIR  </p>
        </div>
        <div className="cartItems">
          {
          cartHere
            .map((item, index) => <CartItem key={ item.id } item={ item } index={ index } />)
          }
        </div>
      </div>
      <h3 data-testid="order-total-value" className="total">
        { `TOTAL: R$ ${cartSum.toString().replace('.', ',')}` }
      </h3>
      <div className="deliveryForm">
        <h2 className="checkoutitle">Endereço de entrega:</h2>
        <div className="inputs">
          <h4>Rua</h4>
          <input
            data-testid="checkout-street-input"
            type="text"
            name="rua"
            onChange={ ({ target: { value } }) => setRua(value) }
            value={ rua }
          />
        </div>
        <div className="inputs">
          <h4>Número</h4>
          <input
            data-testid="checkout-house-number-input"
            type="number"
            name="numero"
            onChange={ ({ target: { value } }) => setNumero(value) }
            value={ numero }
          />
        </div>
      </div>
      <button
        // type="button"
        data-testid="checkout-finish-btn"
        className="finishBtn"
        type="submit"
        disabled={ !(rua && numero) }
        onClick={ handleSubmit }
      >
        Finalizar Pedido
      </button>
      <Footer />
    </div>
  );
};

export default Checkout;

Checkout.propTypes = {
  history: propTypes.func.isRequired,
};
