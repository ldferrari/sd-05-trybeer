import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import validate from '../services/validation';
import { apiRegister } from '../services/ApiTrybeer';
import TryBeerContext from '../context/TryBeerContext';

const Register = () => {
  const {
    email,
    password,
    name,
    role,
    setEmail,
    setPassword,
    setName,
    setRole,
  } = useContext(TryBeerContext);
  const [thisEmailAlreadyExists, setThisEmailAlreadyExists] = useState('');
  const history = useHistory();
  const unprocessable = 422;
  const reverse = -1;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await apiRegister(name, email, password, role);
    const response = result.message && +result.message.split(' ').slice(reverse)[0];
    localStorage.setItem(
      'user',
      JSON.stringify(result),
    );
    return response === unprocessable
      ? setThisEmailAlreadyExists('E-mail already in database.')
      : history.push(role === 'client' ? '/products' : '/admin/orders');
  };

  const handleClick = () => setRole(role === 'client' ? 'administrator' : 'client');

  // prettier-ignore
  return (
    <form>
      <label htmlFor="signup-name">
        Nome
        <input
          data-testid="signup-name"
          type="text"
          value={ name }
          placeholder="Name"
          onChange={ (e) => setName(e.target.value) }
        />
      </label>
      <label htmlFor="signup-email">
        Email
        <input
          data-testid="signup-email"
          type="email"
          value={ email }
          placeholder="Email"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="signup-password">
        Senha
        <input
          data-testid="signup-password"
          type="password"
          value={ password }
          placeholder="Senha"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <label htmlFor="signup-seller">
        <input data-testid="signup-seller" type="checkbox" onClick={ handleClick } />
        Quero Vender
      </label>
      <button
        data-testid="signup-btn"
        type="button"
        disabled={ !validate(email, password, name) }
        onClick={ (e) => handleSubmit(e) }
      >
        Cadastrar
      </button>
      <span>{ thisEmailAlreadyExists }</span>
    </form>
  );
};

export default Register;
