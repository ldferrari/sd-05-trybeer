import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [beers, setBeer] = useState([]);
  const dataContext = {
    beers,
    setBeer,
  };
  return <Context.Provider value = { dataContext }>{children}</Context.Provider>;
}
export default Provider;
