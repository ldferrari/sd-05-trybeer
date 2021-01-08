import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { validate } from '../services/validation';
import TryBeerContext from '../context/TryBeerContext';

const Register = () => {
  const { email, password, name, checked, setEmail, setPassword, setName, setChecked } = useContext(
    TryBeerContext,
  );

  const handleClick = () => setChecked(!checked);

  return (
    <form>
      <label htmlFor="signup-name">
        <input
          data-testid="signup-name"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="signup-email">
        <input
          data-testid="signup-email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="signup-password">
        <input
          data-testid="signup-password"
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label htmlFor="signup-seller">
        <input data-testid="signup-seller" type="checkbox" onClick={handleClick} />
        Quero Vender
      </label>
      <Link to={!checked ? '/products' : '/admin/orders'}>
        <button data-testid="signup-btn" type="button" disabled={!validate(email, password, name)}>
          Cadastrar
        </button>
        {console.log(checked)}
      </Link>
    </form>
  );
};

export default Register;
