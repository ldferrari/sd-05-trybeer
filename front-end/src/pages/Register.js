import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import validate from '../services/validation';
import { apiRegister } from '../services/ApiTrybeer';
import TryBeerContext from '../context/TryBeerContext';

const Register = () => {
  const { email, password, name, checked, setEmail, setPassword, setName, setChecked } = useContext(
    TryBeerContext,
  );

  const message = 'E-mail already in database.';
  const handleClick = () => setChecked(!checked);

  return (
    <form>
      <p> Douglas Silva</p>
      <p>doug@mail.com</p>
      <p>password</p>

      <label htmlFor="signup-name">
        Nome
        <input
          data-testid="signup-name"
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="signup-email">
        Email
        <input
          data-testid="signup-email"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="signup-password">
        Senha
        <input
          data-testid="signup-password"
          type="password"
          value={password}
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label htmlFor="signup-seller">
        <input data-testid="signup-seller" type="checkbox" onClick={handleClick} />
        Quero Vender
      </label>
      <Link to={!checked ? '/products' : '/admin/orders'}>
        <button
          data-testid="signup-btn"
          type="button"
          disabled={!validate(email, password, name)}
          onClick={() => apiRegister(email, password, name, checked)}
        >
          Cadastrar
        </button>
      </Link>
      <span>{message}</span>
    </form>
  );
};

export default Register;
