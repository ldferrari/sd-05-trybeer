import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CheckoutProductsList from '../Components/CheckoutProductsList';
import Header from '../Components/Header';
import Input from '../Components/Input';
import { submitOrderAct, repopulatingAct } from '../Redux/Actions/index';

const zero = 0;

function Checkout({ history, userData, cart, submitOrder, repopulatingStore }) {
  const [buttonShoulBeDisabled, setbuttonShoulBeDisabled] = useState(false);
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [isTotalZero, setisTotalZero] = useState(false);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart'));
    if (localCart) repopulatingStore(localCart);
  }, [repopulatingStore]);

  useEffect(() => {
    if (isTotalZero || street === '' || houseNumber === '') {
      setbuttonShoulBeDisabled(true);
    } else {
      setbuttonShoulBeDisabled(false);
    }
  }, [isTotalZero, setbuttonShoulBeDisabled, street, houseNumber]);

  const total = cart.reduce(
    (acc, product) => acc + product.quantity * product.price,
    zero,
  );

  // +++++++++++++++++++++

  // Substituir por função que pega o token do usuarui no localStorage:

  // if (!userData.user) {
  //   return <Redirect to="/login" />;
  // }

  // +++++++++++++++++++++

  return (
    <div>
      <Header pathname={history.location.pathname} />
      <h3>Produtos</h3>
      {total === 0 && <p>Não há produtos no carrinho</p>}
      <CheckoutProductsList setisTotalZero={setisTotalZero} />
      <h3>Endereço</h3>
      <p>Rua:</p>
      <br />
      <Input
        test="checkout-street-input"
        id="rua"
        onChange={(e) => setStreet(e.target.value)}
      />
      <br />
      <p>Número da casa:</p>
      <br />
      <Input
        test="checkout-house-number-input"
        id="numero-da-casa"
        onChange={(e) => setHouseNumber(e.target.value)}
      />
      <button
        disabled={buttonShoulBeDisabled}
        data-testid="checkout-finish-btn"
        type="button"
        onClick={() =>
          submitOrder({
            cart,
            userData,
            total,
            street,
            houseNumber,
          })
        }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}

Checkout.propTypes = {
  cart: PropTypes.shape({
    reduce: PropTypes.func,
  }).isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }).isRequired,
  submitOrder: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    user: PropTypes.shape(Object),
  }).isRequired,
};

const mapStateToProps = ({ userRequestReducer, productsRequestReducer }) => ({
  userData: userRequestReducer.userData,
  cart: productsRequestReducer.cart,
});

const mapDispatchToProps = (dispatch) => ({
  submitOrder: (data) => dispatch(submitOrderAct(data)),
  repopulatingStore: (cart) => dispatch(repopulatingAct(cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
