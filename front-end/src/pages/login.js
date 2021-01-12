import React, { useState, useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import validateLogin from '../services/validateLogin';
import { checkUser } from '../services/api';
import Context from '../context/Context';
import './css/login.css';
import logo from '../images/logo.png';

// gambi pra passar no requisito 10 ARRUMAR dps da entrega 1
// localStorage.removeItem('role');
// localStorage.removeItem('email');
// localStorage.removeItem('token');

const Login = () => {
  // const [email, setEmail] = useContext(Context);
  const { setUserEmail, setUserName, userEmail } = useContext(Context);
  const [password, setPassword] = useState('');
  const [isLoginValid, setIsLoginValid] = useState(false);
  const [designatedRoute, setDesignetedRoute] = useState(undefined);

  useEffect(() => {
    setIsLoginValid(validateLogin(userEmail, password));
  }, [userEmail, password]);

  const handleRoute = async (ema, pass) => {
    const userRole = await checkUser(ema, pass);
    if (userRole) {
      localStorage.setItem('role', userRole.role);
      localStorage.setItem('token', userRole.token);
      localStorage.setItem('email', userEmail);
      localStorage.setItem('cart', JSON.stringify([]));
      setUserName(userRole.name);
    }
    switch (userRole.role) {
      case 'client':
        setDesignetedRoute('/products');
        break;
      case 'administrator':
        setDesignetedRoute('/admin/orders');
        break;
      default:
        break;
    }
  };

  return (
    <div className="login">
      <div className="input-data">
        <label htmlFor="email-input">
          Email
          <input
            data-testid="email-input"
            name="email-input"
            type="text"
            onChange={ (event) => setUserEmail(event.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            name="password-input"
            data-testid="password-input"
            type="password"
            onChange={ (event) => setPassword(event.target.value) }
          />
        </label>
        <div className="buttons">
          <button
            type="submit"
            data-testid="signin-btn"
            className="btn-login"
            disabled={ !isLoginValid }
            onClick={ () => handleRoute(userEmail, password) }
          >
            ENTRAR
          </button>
          {designatedRoute !== undefined ? <Redirect to={ designatedRoute } /> : null}
          <button type="submit" data-testid="no-account-btn" className="btn-register">
            <Link to="/register">
              Ainda não tenho conta
            </Link>
          </button>
        </div>
      </div>
      {/* se gostarem eu tiro a marca dagua depois */}
      <img src={ logo } alt="logo" className="logo" />
    </div>
  );
};

export default Login;
