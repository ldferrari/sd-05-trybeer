import React from 'react';

export default function RegisterPage() {
  return (
    <div>
      <h2>Registro</h2>
      <div>
        <label>
          Nome
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Email
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Senha
          <input type="password" />
        </label>
      </div>
      <div>
        <input type="checkbox" id="want-to-sell" />
        <label for="want-to-sell">Quero vender</label>
      </div>
      <div>
        <button type="button">
          CADASTRAR
        </button>
      </div>
    </div>
  )
}
