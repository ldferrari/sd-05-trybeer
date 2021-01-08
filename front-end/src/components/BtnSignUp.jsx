// import React, { useContext } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
// import { TryBeerContext } from '../context/TryBeerContext';

const BtnSignUp = () => {
  console.log('tst');
  // const { email, password } = useContext(TryBeerContext);
  return (
    <Link to="/products">
      <button data-testid="signup-btn" type="button">
        Cadastrar
      </button>
    </Link>
  );
};

export default BtnSignUp;
