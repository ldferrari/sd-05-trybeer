import React from 'react';
import { Link } from 'react-router-dom';

const BtnSignUp = () => (
  <Link to="/products">
    <button data-testid="signup-btn" type="button">
      Cadastrar
    </button>
  </Link>
);

export default BtnSignUp;
