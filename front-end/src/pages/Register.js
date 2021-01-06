import React from 'react';
import { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import TrybeerContext from '../context/TrybeerContext';

// function btnRegister(handleData) {
//   return (
//     <button
//       data-testid="signup-btn"
//       disabled={!(checkedName && checkedEmail && checkedPassword)}
//       onClick={(name, email) => handleData(name, email)}
//     ></button>
//   );
// }

function Register() {
  const [checkedName, setCheckedName] = useState(false);
  const [checkedEmail, setCheckedEmail] = useState(false);
  const [checkedPassword, setCheckedPassword] = useState(false);
  const { name, setName, email, setEmail, setPassword, admin, setAdmin } = useContext(
    TrybeerContext
  );

  const checkName = (nameTested) => {
    const regexName = /[a-z ]{12,30}/i;
    if (regexName.test(nameTested) === true) setCheckedName(true);
    // does not work, ainda pode ter carater especial e n°
  };
  const checkEmail = (emailTested) => {
    const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    if (regexEmail.test(emailTested) === true) setCheckedEmail(true);
  };
  const checkPassword = (passwordTested) => {
    if (passwordTested.length > 5) setCheckedPassword(true);
  };
  // outros regex Jorge
  // const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // const regexPassword = /[a-zA-Z0-9@#$%&*]{6,30}/;

  const handleNameChange = (e) => {
    setName(e.target.value);
    checkName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    checkEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPassword(e.target.value);
  };

  const handleData = (name, email) => {
    // BACK -
    // 1. verificar se email jà é existente
    // caso sim, retornar "E-mail already in database."
    // 2. Criar user na DB com esse registro
    // 3. Criar localStorage com esse registro
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
      <input data-testid="signup-name" type="text" onChange={(e) => handleNameChange(e)} />
      <div>Email</div>
      <input data-testid="signup-email" type="text" onChange={(e) => handleEmailChange(e)} />
      <div>Senha</div>
      <input
        data-testid="signup-password"
        type="password"
        onChange={(e) => handlePasswordChange(e)}
      />
      <div>
        <input
          data-testid="signup-seller"
          type="checkbox"
          id="Vender"
          onClick={() => setAdmin(true)}
        />
        <label for="Vender">Quero Vender</label>
      </div>
      {admin && (
        <Link to="/admin/orders">
          <button
            data-testid="signup-btn"
            disabled={!(checkedName && checkedEmail && checkedPassword)}
            onClick={(name, email) => handleData(name, email)}
          >
            Cadastrar
          </button>
        </Link>
      )}
      {!admin && (
        <Link to="/products">
          <button
            data-testid="signup-btn"
            disabled={!(checkedName && checkedEmail && checkedPassword)}
            onClick={(name, email) => handleData(name, email)}
          >
            Cadastrar
          </button>
        </Link>
      )}
      {/* {admin ? <Redirect to="/admin/orders" /> : <Redirect to="/products" />} */}
    </div>
  );
}

// BACK - registro vai provocar Create nos DB (admin/client)
// hipotese: aqui também tem local storage pois pula o login

export default Register;
