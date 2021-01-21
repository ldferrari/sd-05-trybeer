import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';

const LASTONE = -1;

const SideBarItem = ({ children, action, to, onClick }) => {
  const [redirect, setRedirect] = useState(null);

  if (redirect) return <Redirect to={ redirect } />;

  return (
    <ListItem
      button
      data-testid={ action }
      onClick={ () => {
        // Verifica se o evento onClick existe no componente
        // Se ele existir, transforma ele num callback
        if (typeof onClick === 'function') onClick();
        setRedirect(to || `/${action.split('-').slice(LASTONE)}`);
      } }
    >
      {children}
    </ListItem>
  );
};

SideBarItem.propTypes = {
  action: PropTypes.shape({
    split: PropTypes.func,
  }).isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
};

export default SideBarItem;
