import React from 'react';
// import React, { useContext } from 'react';
// import { TrybeerContext } from '../context/TrybeerContext';

const InputEmail = () => {
  // const { setEmail } = useContext(TrybeerContext);
  console.log('tst');
  return (
    <form>
      <label htmlFor="email-input">
        <input data-testid="email-input" type="email" placeholder="Email" />
      </label>
    </form>
  );
};

export default InputEmail;
