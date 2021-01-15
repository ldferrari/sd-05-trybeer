import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';

export default ({ children, action, to, onClick }) => {
  const [ redirect, setRedirect ] = useState(null);

  if (redirect) return <Redirect to={redirect} />;

  return (
    <ListItem
      button
      data-testid={action}
      onClick={() => {
        if (typeof onClick === 'function') onClick();
        setRedirect(to || `/${action.split('-').slice(-1)}`);
      }}
    >
      { children }
    </ListItem>
  )
};
