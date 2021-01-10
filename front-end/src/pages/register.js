import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import Context from '../context/Context';
import { registerUser } from '../services/api';
import { validateRegister } from '../services/validateRegister';

const Register = () => {
  // const [email, setEmail] = useContext(Context);
  const {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
  } = useContext(Context);
  const [password, setPassword] = useState('');
  const [seller, setSeller] = useState(false);
  const [designatedRoute, setDesignetedRoute] = useState(undefined);
  const userData = {
    name: userName,
    email: userEmail,
    password,
    checkbox: seller,
  };

  const handleRegister = async (userToRegister, e) => {
    e.preventDefault();

    if (!validateRegister(userToRegister)) return setDesignetedRoute(undefined);

    const response = await registerUser(userToRegister);

    if (response.message) {
      const labelEmail = document.querySelector('#lblEmail');
      const alreadyExists = document.createElement('span');
      alreadyExists.innerHTML = 'E-mail already in database.';
      return labelEmail.appendChild(alreadyExists);
    }

    localStorage.setItem('role', response.role);
    localStorage.setItem('token', response.token);

    return response.role === 'client'
      ? setDesignetedRoute('/products')
      : setDesignetedRoute('/admin/orders');
  };

  return (
    <div>
      { designatedRoute !== undefined ? <Redirect to={ designatedRoute } /> : null }
      <form id="register-form">
        <label htmlFor="name">
          Nome
          <input
            name="name"
            type="text"
            data-testid="signup-name"
            // minLength acessibilidade
            minLength="12"
            required
            onChange={ (event) => setUserName(event.target.value) }
          />
        </label>
        <label htmlFor="email" id="lblEmail">
          Email
          <input
            name="email"
            type="email"
            data-testid="signup-email"
            required
            onChange={ (event) => setUserEmail(event.target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            name="password"
            type="password"
            data-testid="signup-password"
            minLength="6"
            required
            onChange={ (event) => setPassword(event.target.value) }
          />
        </label>
        <label htmlFor="seller">
          <input
            name="seller"
            type="checkbox"
            data-testid="signup-seller"
            onChange={ (event) => setSeller(event.target.checked) }
          />
          Quero Vender
        </label>
        <button
          type="submit"
          data-testid="signup-btn"
          disabled={ !validateRegister(userData) }
          onClick={ (e) => handleRegister(userData, e) }
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Register;
