// import React, { useContext } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
// import { TrybeerContext } from '../context/TrybeerContext';

const BtnLogin = () => {
  console.log('tst');
  // const { email, password } = useContext(TrybeerContext);
  return (
    <Link to="/products">
      <button data-testid="signin-btn" type="button">
        Entrar
      </button>
    </Link>
  );
};

export default BtnLogin;
