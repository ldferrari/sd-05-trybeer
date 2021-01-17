import React from 'react';
import { Link } from 'react-router-dom';

const sideBarStyle = {
  background: 'var(--dark)',
  color: 'var(--white)',
  height: '100vh',
  width: '10vw',
  display: 'flex',
  'flex-direction': 'column',
  'text-align': 'center',
};

const AdminSideBar = () => (
  <div className="admin-side-bar-container" style={ sideBarStyle }>
    <Link style={ { color: 'white' } } to="/admin/orders" data-testid="side-menu-item-orders">
      Meus Pedidos
    </Link>
    <Link style={ { color: 'white' } } to="/admin/profile" data-testid="side-menu-item-profile">
      Perfil
    </Link>
    <Link style={ { color: 'white' } } to="/admin/profile" data-testid="side-menu-item-logout">
      Sair
    </Link>
  </div>
);

export default AdminSideBar;
