import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import titleForHeader from '../Helper/titleForHeader';
import SideBar from './SideBar';

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  background: 'var(--dark)',
  color: 'var(--white)',
  margin: 0,
  padding: '8px',
};

const Header = ({ pathname }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [redirect, setRedirect] = useState(null);

  // func que retorna o título do header baseado no caminho
  const title = titleForHeader(pathname);

  // useEffect(() => {
  // console.log(showSideBar);
  // }, [showSideBar]);

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShowSideBar(!showSideBar);
  };

  if (redirect) return <Redirect to={ redirect } />;

  return (
    <div pathname={ pathname }>
      <div style={ headerStyle }>
        <Button onClick={ toggleDrawer() } data-testid="top-hamburguer">
          <i
            className="material-icons"
            style={ { color: 'var(--white)', fontSize: '32px' } }
          >
            menu
          </i>
        </Button>
        <h3 data-testid="top-title">{ title }</h3>
        <div style={ { marginRight: '70px' } } />
        <span className="side-menu-container" style={ { display: showSideBar ? 'block' : 'none' } }>.</span>
        <Drawer open={ showSideBar } onClose={ toggleDrawer() }>
          <SideBar
            toggleDrawer={ toggleDrawer }
            redirect={ setRedirect }
          />
        </Drawer>
      </div>
    </div>
  );
};

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Header;
