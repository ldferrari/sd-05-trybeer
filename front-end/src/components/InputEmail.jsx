import React from 'react';
// import React, { useContext } from 'react';
// import  TryBeerContext  from '../context/TryBeerContext';

const InputEmail = (props) => {
  // const { setEmail } = useContext(TryBeerContext);
  console.log('tst');
  return (
    <form>
      <label htmlFor={props.dataId}>
        <input data-testid={props.emailId} type="email" placeholder="Email" />
      </label>
    </form>
  );
};

export default InputEmail;
