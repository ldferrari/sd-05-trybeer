import React from 'react';
// import React, { useContext } from 'react';
// import { TrybeerContext } from '../context/TrybeerContext';

const InputPassword = () => {
  // const { setPassword } = useContext(TrybeerContext);
  console.log('InputPassword');
  return (
    <form>
      <label htmlFor="password-input">
        <input data-testid="password-input" type="password" placeholder="Senha" />
      </label>
    </form>
  );
};

export default InputPassword;
