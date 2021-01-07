import React from 'react';
// import { Redirect } from 'react-router-dom';
// import useLogin from '../hooks/useLogin';
import { InputEmail, InputPassword, BtnLogin, BtnSignUp, Progress } from '../components';

const Login = () => {
  // const { email, setEmail, password, setPassword } = useLogin();
  console.log('Login');
  return (
    <div>
      <InputEmail />
      <InputPassword />
      <BtnLogin />
      <BtnSignUp />
      <Progress />
    </div>
  );
};

export default Login;
