import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [beers, setBeer] = useState([]);
  const dataContext = {
    beers,
    setBeer,
  };
  return <Context.Provider value={ dataContext }>{children}</Context.Provider>;
}
Provider.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Provider;
