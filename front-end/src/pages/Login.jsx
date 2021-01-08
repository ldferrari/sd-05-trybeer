import React from 'react';
import { InputEmail, InputPassword, BtnLogin, BtnSignUp, Progress } from '../components';

const Login = () => {
  // const { email, setEmail, password, setPassword } = useLogin();
  const emailId = 'email-input';
  const passwordId = 'password-input';
  return (
    <div>
      <InputEmail {...emailId} />
      <InputPassword {...passwordId} />
      <BtnLogin />
      <BtnSignUp />
      <Progress />
    </div>
  );
};

export default Login;
