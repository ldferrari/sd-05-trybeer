import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CheckoutProductsList from '../Components/CheckoutProductsList';
import Header from '../Components/Header';
import Input from '../Components/Input';


function Checkout({ history }) {
  const [buttonShoulBeDisabled, setbuttonShoulBeDisabled] = useState(false);
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [isTotalZero, setisTotalZero] = useState(false);

  useEffect(() => {

    if(isTotalZero || street === '' || houseNumber === '') {
      setbuttonShoulBeDisabled(true)
    } else {
      setbuttonShoulBeDisabled(false)
    }

  }, [isTotalZero, setbuttonShoulBeDisabled, street, houseNumber] )

  return (
    <div>
      <Header pathname={history.location.pathname} />
      <h3>Produtos</h3>
      <CheckoutProductsList  setisTotalZero={setisTotalZero}/>
      <h3>Endereço</h3>
      <label htmlFor="rua">Rua:</label>
      <br />
      <Input test={'checkout-street-input'} id={'rua'}  onChange={ (e) => setStreet(e.target.value) } />
      <br />
      <label htmlFor="numero-da-casa">Número da casa:</label>
      <br />
      <Input test={'checkout-house-number-input'} id={'numero-da-casa'} onChange={ (e) => setHouseNumber(e.target.value) } />
      <button disabled={buttonShoulBeDisabled}data-testid="checkout-finish-btn">Finalizar Pedido</button>
    </div>
  );
}

Checkout.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Checkout;
