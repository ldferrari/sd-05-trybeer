import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div>
        <label>
          Email
          <input type="text" data-testid="email-input" />
        </label>
        <label>
          Senha
          <input type="password" data-testid="password-input" />
        </label>
        <button data-testid="signin-btn">ENTRAR</button>
        <button type="button" data-testid="no-account-btn">
          <Link to="/register">Ainda não tenho conta</Link>
        </button>
      </div>
    );
  }
}
