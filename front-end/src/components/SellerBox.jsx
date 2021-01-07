import React from 'react';
// import React, { useContext } from 'react';
// import { TrybeerContext } from '../context/TrybeerContext';

const SellerBox = () => {
  // const { setEmail } = useContext(TrybeerContext);
  console.log('SellerBox');
  return (
    <form>
      <label htmlFor="signup-seller">
        <input data-testid="signup-seller" type="checkbox" />
      </label>
    </form>
  );
};

export default SellerBox;
