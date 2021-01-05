import React from 'react';
// import { Redirect } from 'react-router-dom';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

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
      <Footer />
    </div>
  );
};

export default Login;
