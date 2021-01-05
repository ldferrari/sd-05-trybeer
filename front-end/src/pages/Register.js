import React from 'react';
import { useContext } from 'react';
import TrybeerContext from '../context/TrybeerContext';

// Os dados do presente registro vão provocqr o Create dos DB
// Que seja do lado admin ou client dependendo do click

function Register() {
  // const [bla, setBla] = useState(initialstatetrueorfalse);
  const {
    email,
    setEmail,
    name,
    setName,
    admin,
    setAdmin,
    password,
    setPassword,
  } = useContext(TrybeerContext);

  // const someFunction = (someParameter) => {
  // };

  const emailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const nameValidate = /[a-z ]{12,30}/i;
  const passwordValidate = /[a-zA-Z0-9@#$%&*]{6,30}/;

  const adminCheck = (bolean) => {
    if (bolean === false) {
      setAdmin(true);
    }
    if (bolean === true) {
      setAdmin(false);
    }
  }

  return (
    <div>
      <div>
        Nome:
      </div>
        <input data-testid="signup-name" type="text" onChange={ (e) => setName(e.target.value) }/>
      <div>
        Email:
      </div>
        <input data-testid="signup-email" type="text" onChange={ (e) => setEmail(e.target.value) }/>
      <div>
        Password:
      </div>
        <input data-testid="signup-password" type="password" onChange={ (e) => setPassword(e.target.value) }/>
      <div>
        <input data-testid="signup-seller" type="checkbox" id="Vender" />
        <label for="Vender" onClick={() => adminCheck(admin)}>Quero Vender</label>
      </div>
      <button data-testid="signup-btn">Cadastrar</button>
    </div>
  );
}

export default Register;
