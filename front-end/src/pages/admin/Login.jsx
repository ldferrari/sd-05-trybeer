import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <label>
          Email
          <input type="text"></input>
        </label>
        <label>
          Senha
          <input type="password"></input>
        </label>
        <button>ENTRAR</button>
        <button type="button" data-testid="no-account-btn">
          <Link to="/register">Ainda não tenho conta</Link>
        </button>
      </div>
    );
  }
}
