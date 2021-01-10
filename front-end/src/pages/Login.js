import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { checkEmail, checkPassword } from '../services/checkUserData';
import TrybeerContext from '../context/TrybeerContext';
import { login } from '../services/fetch';
import { withRouter } from 'react-router-dom';

import SqlBtn from '../components/sqlBtn';

function inputEmail(handleEmailChange) {
  return (
    <div className="login-input">
      <p>Email</p>
      <input
        type="email"
        data-testid="email-input"
        onChange={(e) => handleEmailChange(e)}
      />
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
        onChange={(e) => handlePasswordChange(e)}
      />
    </div>
  );
}

function Login({ history }) {
  const [checkedEmail, setCheckedEmail] = useState('');
  const [checkedPassword, setCheckedPassword] = useState('');
  const { setEmail, setPassword, email, password } = useContext(TrybeerContext);

  const handleEmailChange = (e) => {
    setCheckedEmail(checkEmail(e.target.value));
    if (!checkedEmail) {
      console.log('email is bad format');
    }
    return setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setCheckedPassword(checkPassword(e.target.value));
    if (!checkedPassword) {
      console.log('password has to have 6 caracteres');
    }
    return setPassword(e.target.value);
  };

  const handleResult = (result) => {
    localStorage.setItem('user', JSON.stringify(result));
    if (result.role === 'administrator') {
      history.push('/admin/orders');
    }
    if (result.role === 'client') {
      history.push('/products');
    }
  };

  // const storage = () => {
  //   const userInfos = {
  //     // BACK - substituir mock por infos do db (em params?)
  //     name: 'Taylor Swift',
  //     email: 'taylorswift@email.com',
  //     token:
  //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4(...)',
  //     role: 'client',
  //   };
  //   localStorage.setItem('user', JSON.stringify(userInfos));
  // };

  return (
    <div className="login-page" data-testid="">
      {inputEmail(handleEmailChange)}
      {inputPassword(handlePasswordChange)}
      {/* <Link to={ loginInfo.role === 'administrador' ? "/admin/orders" : "/products"}> */}
      {/* BACK - Conseguir condicionar, é
        <Link to="/admin/orders"> no caso de ser admin.
        Isso vem do create do register */}
      <button
        type="button"
        data-testid="signin-btn"
        disabled={!(checkedEmail && checkedPassword)}
        onClick={() =>
          login(email, password).then((result) => handleResult(result))
        }

        // BACK - aqui também cria token do user
      >
        ENTRAR
      </button>
      {/* </Link> */}
      <Link to="/register">
        <button type="button" data-testid="no-account-btn">
          Ainda não tenho conta
        </button>
      </Link>
      <SqlBtn />
    </div>
  );
}

export default withRouter(Login);
