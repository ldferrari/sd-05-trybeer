import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import validateLogin from '../services/validateLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginValid, setIsLoginValid] = useState(false);

  useEffect(() => { setIsLoginValid(validateLogin(email, password)) }, [email, password]);

  return (
    <div>
      <h2>Email</h2>
      <input data-testid="email-input" type='text' onChange={(event) => setEmail(event.target.value)}></input>
      <h2>Senha</h2>
      <input data-testid="password-input" type='password' onChange={(event) => setPassword(event.target.value)}></input>
      <button data-testid="signin-btn" disabled={!isLoginValid}>Entrar</button>
      <Link to="/register">
        <button data-testid="no-account-btn">Ainda não tenho conta</button>
      </Link>
    </div>
  )
}

export default Login;
