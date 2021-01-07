import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  checkName,
  checkEmail,
  checkPassword,
} from '../services/checkUserData';
import TrybeerContext from '../context/TrybeerContext';

function Register() {
  const [checkedName, setCheckedName] = useState(false);
  const [checkedEmail, setCheckedEmail] = useState(false);
  const [checkedPassword, setCheckedPassword] = useState(false);
  const [clickRegister, setClickRegister] = useState(false);
  const {
    name,
    setName,
    email,
    setEmail,
    setPassword,
    admin,
    setAdmin,
  } = useContext(TrybeerContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setCheckedName(checkName(e.target.value));
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setCheckedEmail(checkEmail(e.target.value));
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setCheckedPassword(checkPassword(e.target.value));
  };

  const handleClickRegister = () => {
    setClickRegister(true);
    // BACK -
    // 1. verificar se email jà é existente
    // caso sim, retornar "E-mail already in database."
    // 2. Criar user na DB com esse registro
    // 3. Pegar token do BD para localStorage
    // Fazer promise para garantir que 2. venha antes de 3.
    const userInfos = {
      name,
      email,
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4(...)',
      role: admin ? 'admin' : 'client',
    };
    localStorage.setItem('user', JSON.stringify(userInfos));
  };
  return (
    <div>
      <div>Nome</div>
      <input
        data-testid="signup-name"
        type="text"
        onChange={ (e) => handleNameChange(e) }
      />
      <div>Email</div>
      <input
        data-testid="signup-email"
        type="text"
        onChange={ (e) => handleEmailChange(e) }
      />
      <div>Senha</div>
      <input
        data-testid="signup-password"
        type="password"
        onChange={ (e) => handlePasswordChange(e) }
      />
      <div>
        <label htmlFor="vender">
          Quero Vender
          <input
            data-testid="signup-seller"
            type="checkbox"
            id="vender"
            onClick={ () => setAdmin(true) }
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="signup-btn"
        disabled={ !(checkedName && checkedEmail && checkedPassword) }
        onClick={ () => handleClickRegister() }
      >
        Cadastrar
      </button>
      {clickRegister && admin && <Redirect to="/admin/orders" />}
      {clickRegister && !admin && <Redirect to="/products" />}
    </div>
  );
}
// BACK - registro vai provocar Create nos DB (admin/client)
// hipotese: aqui também tem local storage pois pula o login

export default Register;
