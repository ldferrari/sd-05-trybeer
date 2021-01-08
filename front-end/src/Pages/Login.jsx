import React, { useState } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div id="Login">
      <h1>Login</h1>
      <Input
        test="email-input"
        placeholder="Digite seu e-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        test="password-input"
        placeholder="Digite sua senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        test="login-submit-btn"
        disabled={loginValidation(email, password)}
        onClick={() => {}}
      >
        Entrar
      </Button>
    </div>
  );
};

export default Login;
