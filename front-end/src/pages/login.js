import React, { useState, useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import validateLogin from '../services/validateLogin';
import { checkUser } from '../services/api';
import Context from '../context/Context';

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
    <div className="input">
      <h2>Email</h2>
      <input
        data-testid="email-input"
        type="text"
        onChange={ (event) => setUserEmail(event.target.value) }
      />
      <h2>Senha</h2>
      <input
        data-testid="password-input"
        type="password"
        onChange={ (event) => setPassword(event.target.value) }
      />
      <button
        type="submit"
        data-testid="signin-btn"
        disabled={ !isLoginValid }
        onClick={ () => handleRoute(userEmail, password) }
      >
        ENTRAR
      </button>
      { designatedRoute !== undefined ? <Redirect to={ designatedRoute } /> : null }
      <Link to="/register">
        <button type="submit" data-testid="no-account-btn">
          Ainda não tenho conta
        </button>
      </Link>
    </div>
  );
};

export default Login;
