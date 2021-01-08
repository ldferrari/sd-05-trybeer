import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../services/api';
import validateRegister from '../services/validateRegister';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seller, setSeller] = useState(false);
  const [designatedRoute, setDesignetedRoute] = useState(undefined);
  const userData = {
    name,
    email,
    password,
    role: seller ? 'administrator' : 'client',
  };

  const handleRegister = async (userToRegister, e) => {
    e.preventDefault();

    if (!validateRegister(userToRegister)) return setDesignetedRoute(undefined);

    const response = await registerUser(userToRegister);

    if (response.message) {
      const labelEmail = document.querySelector('#teste');
      const alreadyExists = document.createElement('span');
      alreadyExists.innerHTML = 'E-mail already in database.';
      return labelEmail.appendChild(alreadyExists);
    }

    localStorage.setItem('role', response.role);
    localStorage.setItem('token', response.token);

    return response.role === 'client'
      ? setDesignetedRoute('/products')
      : setDesignetedRoute('/adimn/orders');
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
            onChange={ (event) => setName(event.target.value) }
          />
        </label>
        <label htmlFor="email" id="teste">
          Email
          <input
            name="email"
            type="email"
            data-testid="signup-email"
            required
            onChange={ (event) => setEmail(event.target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            name="password"
            type="password"
            data-testid="signup-name"
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
          Quero vender
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
