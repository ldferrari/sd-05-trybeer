// import React, { useContext } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
// import { TrybeerContext } from '../context/TrybeerContext';

const BtnSignUp = () => {
  console.log('tst');
  // const { email, password } = useContext(TrybeerContext);
  return (
    <Link to="/products">
      <button data-testid="signup-btn" type="button">
        Cadastrar
      </button>
    </Link>
  );
};

export default BtnSignUp;
