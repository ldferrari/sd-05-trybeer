import React, { useState, useEffect } from 'react';
import Input from '../Components/Input';

const Register = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [isDisabled, isSetDisabled] = useState(true);

  function validate() {
    const validName =  /^[a-zA-Z ]{12}[a-zA-Z ]*$/.test(name);
    const validEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email);
    const validSenha = /^[^W_]{7,100}$/.test(password);
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
        <label htmlFor="name">Nome</label>
        <Input
          test="signup-name"
          id="name"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <Input
          test="signup-email"
          id="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <Input
          type="password"
          test="signup-password"
          id="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="quero-vender">Quero Vender</label>
        <input
          type="checkbox"
          id="quero-vender"
          data-testid="signup-seller"
          onChange={({ target: { checked } }) => {
            setIsSeller(checked);
          }}
        />
        <button disabled={isDisabled} data-testid="signup-btn">
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default Register;
