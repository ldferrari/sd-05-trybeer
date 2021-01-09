import React, { useState, useEffect } from 'react';
import Input from '../Components/Input';

const Register = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [isDisabled, isSetDisabled] = useState(true);

  function validate() {
    const validName = (name || '').length > 3;
    const validEmail = (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/).test(email);
    const validSenha = (/^[^W_]{7,100}$/).test(password);
    if (validName && validEmail && validSenha) isSetDisabled(false);
    else isSetDisabled(true);
  }

  useEffect(() => {
    validate();
  }, [name, email, password]);

  return (
    <div className="container-main" id="Register">
      <div className="container-page">
        <h1>Register</h1>
        <Input
          test="name-input"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="checkbox"
          data-testid="signup-seller"
          onChange={ ({ target: { checked } }) => { setIsSeller(checked) } }
        />
        <button disabled={isDisabled}>
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Register;