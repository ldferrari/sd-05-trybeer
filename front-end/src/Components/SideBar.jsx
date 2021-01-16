import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
// import { getUserData } from '../Services/utils';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { clear } from '../Redux/Actions/user';
import Item from './SidebarItem';

const sideBarStyle = {
  background: 'var(--dark)',
  color: 'var(--white)',
  height: '100vh',
  width: '90vw',
};

const SideBar = ({ toggleDrawer, logout }) => (
  <div
    style={ sideBarStyle }
    role="presentation"
    onClick={ toggleDrawer() }
    onKeyDown={ toggleDrawer() }
  >
    <List style={ { background: 'var(--dark)' } }>
      <Divider />
      <Item action="side-menu-item-products">Produtos</Item>
      <Item action="side-menu-item-my-orders">Pedidos</Item>
      <Item action="side-menu-item-my-profile">Meu Perfil</Item>
      <Divider />
      <Item
        action="side-menu-item-logout"
        to="/login"
        onClick={ () => { logout(); } }
      >
        Sair
      </Item>
    </List>
  </div>
);

SideBar.propTypes = {
  logout: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(clear()),
});

export default connect(() => ({}), mapDispatchToProps)(SideBar);
