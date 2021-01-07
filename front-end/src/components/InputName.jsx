import React from 'react';
// import React, { useContext } from 'react';
// import { TrybeerContext } from '../context/TrybeerContext';

const InputName = () => {
  // const { setEmail } = useContext(TrybeerContext);
  console.log('InputName');
  return (
    <form>
      <label htmlFor="signup-name">
        <input data-testid="signup-name" type="text" placeholder="Name" />
      </label>
    </form>
  );
};

export default InputName;
