import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validateName from '../../services/general/validateName';
import validateEmail from '../../services/general/validateEmail';
import validatePassword from '../../services/general/validatePassword';

export default function RegisterPage() {
  const [isNameValid, setNameValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isSignupSellerSelected, setSignupSellerSelected] = useState(false);
  return (
    <div>
      <h2>Registro</h2>
      <div>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            data-testid="signup-name"
            onChange={ ((event) => { setNameValid(validateName(event.target.value)); }) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            data-testid="signup-email"
            onChange={ ((event) => { setEmailValid(validateEmail(event.target.value)); }) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            data-testid="signup-password"
            onChange={ ((event) => { setPasswordValid(validatePassword(event.target.value)); }) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="want-to-sell">
          <input
            type="checkbox"
            id="want-to-sell"
            data-testid="signup-seller"
            onChange={ () => setSignupSellerSelected(!isSignupSellerSelected) }
          />
          Quero Vender
        </label>
      </div>
      <div>
        <button
          type="button"
          data-testid="signup-btn"
          disabled={ !isNameValid || !isEmailValid || !isPasswordValid }
        >
          { (isNameValid || isEmailValid || isPasswordValid)
    ? <Link to={ isSignupSellerSelected ? '/admin/orders' : '/products' }>
              Cadastrar
      </Link> : <div>Cadastrar</div> }
        </button>
      </div>
    </div>
  );
}
