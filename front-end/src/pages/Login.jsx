import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TryBeerContext from '../context/TryBeerContext';

const Login = () => {
  const { email, setEmail, password, setPassword } = useContext(TryBeerContext);
  const RegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validEmail = RegEx.test(String(email).toLowerCase());

  // useEffect(() => {
  //   fetch('http://localhost:3001/api/users')
  //     .then((result) => result.json())
  //     .then((data) => console.log(data[0][0].role));
  // }, []);

  useEffect(() => {
    axios.post('http://localhost:3001/login', {email: "tryber@trybe.com", password: })
      .then((result) => result.json())
      .then((data) => console.log(data[0][0].role));
  }, []);
)

  return (
    <section>
      <form>
        <label htmlFor="email-input">
          Email
          <input
            data-testid="email-input"
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            data-testid="password-input"
            type="password"
            placeholder="Senha"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <Link to="/products">
          <button
            data-testid="signin-btn"
            type="button"
            disabled={!validEmail || password.length < 6}
          >
            ENTRAR
          </button>
        </Link>
        <Link to="/register">
          <button data-testid="no-account-btn" type="button">
            Ainda não tenho conta
          </button>
        </Link>
      </form>
    </section>
  );
};

export default Login;
