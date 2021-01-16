import React, { useState }  from 'react';
import { Redirect } from 'react-router-dom';
import { getUserData } from '../Services/utils';

export default ({ children }) => {
  const [isLogged] = useState(
    getUserData(),
  );

  if (!isLogged) return <Redirect to="/login" />;

  return (
    <div>
      { children }
    </div>
  )
};
