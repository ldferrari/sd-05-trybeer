import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
import './index.css';
import Header from '../../components/header';

const Login = () => {
  return (
    <div>
      <Header>TryBeer</Header>
      <form>
        <input/>
        <input/>
        <button>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
