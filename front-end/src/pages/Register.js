import React, { useContext, useState } from 'react';
import {
  checkName,
  checkEmail,
  checkPassword,
} from '../services/checkUserData';
import TrybeerContext from '../context/TrybeerContext';
import { createUser, login } from '../services/fetch';
import { withRouter } from 'react-router-dom';

function Register({ history }) {
  const [checkedName, setCheckedName] = useState(false);
  const [checkedEmail, setCheckedEmail] = useState(false);
  const [checkedPassword, setCheckedPassword] = useState(false);
  const [clickRegister, setClickRegister] = useState(false);
  const [emailExistis, setEmailExists] = useState(false);
  const {
    name,
    setName,
    email,
    setEmail,
    setPassword,
    password,
    admin,
    setAdmin,
  } = useContext(TrybeerContext);

  const handleNameChange = (e) => {
    setCheckedName(checkName(e.target.value));
    if (checkedName) {
      setName(e.target.value);
    }
  };
  const handleEmailChange = (e) => {
    setCheckedEmail(checkEmail(e.target.value));
    if (checkedEmail) {
      setEmail(e.target.value);
    }
  };
  const handlePasswordChange = (e) => {
    setCheckedPassword(checkPassword(e.target.value));
    if (checkedPassword) {
      setPassword(e.target.value);
    }
  };

  const handleClickRegister = async () => {
    setClickRegister(true);
    const role = admin ? 'administrator' : 'client';
    await createUser(name, email, password, role).then((result) =>
      handleResult(result)
    );
  };

  const handleResult = async (result) => {
    if (result.message === 'E-mail already in database') {
      setEmailExists(true);
    }
    localStorage.setItem('user', JSON.stringify(result));
    if (result.role === 'administrator') {
      history.push('/admin/orders');
    }
    if (result.role === 'client') {
      history.push('/products');
    }
  };

  return (
    <div>
      <div>Nome</div>
      <input
        data-testid="signup-name"
        type="text"
        onChange={(e) => handleNameChange(e)}
      />
      <div>Email</div>
      <input
        data-testid="signup-email"
        type="text"
        onChange={(e) => handleEmailChange(e)}
      />
      <div>Senha</div>
      <input
        data-testid="signup-password"
        type="password"
        onChange={(e) => handlePasswordChange(e)}
      />
      <div>
        <label htmlFor="vender">Quero Vender</label>
        <input
          data-testid="signup-seller"
          type="checkbox"
          id="vender"
          onClick={() => setAdmin(true)}
        />
      </div>
      <button
        type="button"
        data-testid="signup-btn"
        disabled={!(checkedName && checkedEmail && checkedPassword)}
        onClick={() => handleClickRegister()}
      >
        Cadastrar
      </button>
      {emailExistis ? <div>E-mail already in database.</div> : null}
    </div>
  );
}

export default withRouter(Register);
