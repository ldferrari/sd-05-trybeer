import React from 'react';
// import React, { useContext } from 'react';
// import { TrybeerContext } from '../context/TrybeerContext';

const InputPassword = (props) => {
  // const { setPassword } = useContext(TrybeerContext);
  console.log('InputPassword');
  return (
    <form>
      <label htmlFor={props.passwordId}>
        <input data-testid={props.passwordId} type="password" placeholder="Senha" />
      </label>
    </form>
  );
};

export default InputPassword;
