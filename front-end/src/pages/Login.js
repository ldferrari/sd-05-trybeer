import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { checkEmail, checkPassword } from '../services/checkUserData';
import TrybeerContext from '../context/TrybeerContext';
import { login, getProducts } from '../services/fetch';
import TrybeerProvider from '../context/TrybeerProvider';
import { Get } from 'react-axios';
import axios from 'axios'



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
  const [checkedEmail, setCheckedEmail] = useState('');
  const [checkedPassword, setCheckedPassword] = useState('');
  const { setEmail, setPassword, email, password } = useContext(TrybeerContext);
  const [loginInfo, setLoginInfo] = useState([])

  const handleEmailChange = (e) => {
    setCheckedEmail(checkEmail(e.target.value));
    if (!checkedEmail) {
      console.log('email is bad format')
    }
    return setEmail(e.target.value)
  };
  const handlePasswordChange = (e) => {
    setCheckedPassword(checkPassword(e.target.value));
    if (!checkedPassword) {
      console.log('password has to have 6 caracteres')
    }
    return setPassword(e.target.value)
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
          onClick={ () => /* storage() */ 
            login(email, password).then((result) => setLoginInfo(result))
          }
          
          // BACK - aqui também cria token do user
        >
          ENTRAR
        </button>
      </Link>
      <Link to="/register">
        <button type="button" data-testid="no-account-btn"
          >
          Ainda não tenho conta
          </button>
        </Link>
          <button
            type="button"
            onClick={() => getProducts()
              // axios.get('http://localhost:3001/products', {}).then((response) => console.log(response)) ||
              // console.log('entrou no onclick')
              // isConnected().then(response => console.log(response)) || console.log('entreou no onclick')
            }
          >testat fetch produtos</button>
    </div>
  );
}

export default Login;