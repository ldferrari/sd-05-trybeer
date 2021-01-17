import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clear } from '../Redux/Actions/user';

const sideBarStyle = {
  background: 'var(--dark)',
  color: 'var(--white)',
  height: '100vh',
  width: '10vw',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  float: 'left',
};

const AdminSideBar = ({ logout }) => (
  <div className="admin-side-bar-container" style={ sideBarStyle }>
    <Link
      style={ { color: 'white' } }
      to="/admin/orders"
      data-testid="side-menu-item-orders"
    >
      Meus Pedidos
    </Link>
    <Link
      style={ { color: 'white' } }
      to="/admin/profile"
      data-testid="side-menu-item-profile"
    >
      Perfil
    </Link>
    <Link
      style={ { color: 'white' } }
      onClick={ () => logout() }
      to="/login"
      data-testid="side-menu-item-logout"
    >
      Sair
    </Link>
  </div>
);

AdminSideBar.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(clear()),
});

export default connect(null, mapDispatchToProps)(AdminSideBar);
