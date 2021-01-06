import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import validateLogin from '../services/validateLogin';
import checkUser from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginValid, setIsLoginValid] = useState(false);
  const [designatedRoute, setDesignetedRoute] = useState(undefined);

  useEffect(() => {
    setIsLoginValid(validateLogin(email, password));
  }, [email, password]);

  // const handleRoute = async (email) => {
  //   const userRole = await checkUser(email);
  //   console.log(typeof(userRole))
  //   switch(userRole) {
  //     case 'client':
  //       return (
  //         <Redirect to='/products' />
  //       );
  //       break;
  //     case 'administrator':
  //       return (
  //         <Redirect to='/admin/orders' />
  //       )
  //       break;
  //     default:
  //       alert('Usuário não encontrado');
  //   }
  // }

  const handleRoute = async (ema, pass) => {
    const userRole = await checkUser(ema, pass);
    localStorage.setItem('token', userRole.token);
    // console.log(userRole);
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
        onChange={ (event) => setEmail(event.target.value) }
      />
      <h2>Senha</h2>
      <input data-testid="password-input" type="password" onChange={ (event) => setPassword(event.target.value) } />
      <button
        type="submit"
        data-testid="signin-btn"
        disabled={ !isLoginValid }
        onClick={ () => handleRoute(email, password) }
      >
        ENTRAR
      </button>
      { designatedRoute !== undefined ? <Redirect to={ designatedRoute } /> : null }
      <Link to="/register">
        <button type="submit" data-testid="no-account-btn">Ainda não tenho conta</button>
      </Link>
    </div>
  );
};

export default Login;
