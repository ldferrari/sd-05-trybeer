import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import validateLogin from '../services/validateLogin';
import checkUser from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginValid, setIsLoginValid] = useState(false);
  const [designatedRoute, setDesignetedRoute] = useState(undefined);

  useEffect(() => { setIsLoginValid(validateLogin(email, password)) }, [email, password]);

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

  const handleRoute = async (email, password) => {
    const userRole = await checkUser(email, password);
    localStorage.setItem('token', userRole.token);
    switch(userRole.role) {
      case 'client':
        setDesignetedRoute('/products')
        break;
      case 'administrator':
        setDesignetedRoute('/admin/orders')
        break;
      default:
        alert('Usuário não encontrado');
    }
  }


  return (
    <div className="input">
      <h2>Email</h2>
      <input data-testid="email-input" type='text' onChange={(event) => setEmail(event.target.value)}></input>
      <h2>Password</h2>
      <input data-testid="password-input" type='password' onChange={(event) => setPassword(event.target.value)}></input>
      <button data-testid="signin-btn" disabled={!isLoginValid} onClick={() => handleRoute(email, password)}>ENTRAR</button>
      { designatedRoute !== undefined ?  <Redirect to={designatedRoute}/> : null }
      <Link to="/register">
        <button data-testid="no-account-btn">Ainda não tenho conta</button>
      </Link>
    </div>
  )
}

export default Login;
