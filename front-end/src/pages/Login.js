import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { checkEmail, checkPassword } from '../services/checkUserData';
import TrybeerContext from '../context/TrybeerContext';

function inputEmail(handleEmailChange) {
  return (
    <div className="login-input">
      <p>Email</p>
      <input type="email" data-testid="email-input" onChange={ (e) => handleEmailChange(e) } />
    </div>
  );
}

function inputPassword(handlePasswordChange) {
  return (
    <div className="login-input">
      <p>Senha</p>
      <input
        type=""
        data-testid="password-input"
        name="password"
        onChange={ (e) => handlePasswordChange(e) }
      />
    </div>
  );
}

function Login() {
  const [checkedEmail, setCheckedEmail] = useState(false);
  const [checkedPassword, setCheckedPassword] = useState(false);
  const { setEmail, setPassword } = useContext(TrybeerContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setCheckedEmail(checkEmail(e.target.value));
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setCheckedPassword(checkPassword(e.target.value));
  };

  const storage = () => {
    const userInfos = {
      // BACK - substituir mock por infos do db (em params?)
      name: 'Taylor Swift',
      email: 'taylorswift@email.com',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4(...)',
      role: 'client',
    };
    localStorage.setItem('user', JSON.stringify(userInfos));
  };

  return (
    <div className="login-page" data-testid="">
      {inputEmail(handleEmailChange)}
      {inputPassword(handlePasswordChange)}
      <Link to="/products">
        {/* BACK - Conseguir condicionar, é
        <Link to="/admin/orders"> no caso de ser admin.
        Isso vem do create do register */}
        <button
          type="button"
          data-testid="signin-btn"
          disabled={ !(checkedEmail && checkedPassword) }
          onClick={ () => storage() }
          // BACK - aqui também cria token do user
        >
          ENTRAR
        </button>
      </Link>
      <Link to="/register">
        <button type="button" data-testid="no-account-btn">
          Ainda não tenho conta
        </button>
      </Link>
    </div>
  );
}

export default Login;
