import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './cssComponents/sideBar.css';

export default function SideBar({ userRole, active }) {
  const handleClick = () => {
    localStorage.clear();
  };
  return (
    <aside className={ `side-container ${active && 'appear'}` }>
      {userRole === 'client' && (
        <div className={ `${active && 'side-menu-container'} side-bar` }>
          <Link to="/products" data-testid="side-menu-item-products">
            Produtos
          </Link>
          <Link to="/orders" data-testid="side-menu-item-my-orders">
            Meus Pedidos
          </Link>
          <Link to="/profile" data-testid="side-menu-item-my-profile">
            Meu perfil
          </Link>
          <Link to="/login" onClick={ handleClick } data-testid="side-menu-item-logout">
            Sair
          </Link>
        </div>
      )}
      {userRole === 'administrator' && (
        <div className="admin-side-bar-container side-bar">
          <div>
            <Link to="/admin/orders" data-testid="side-menu-item-orders">
              Pedidos
            </Link>
            <Link to="/admin/profile" data-testid="side-menu-item-profile">
              Meu perfil
            </Link>
          </div>
          <Link to="/login" data-testid="side-menu-item-logout">
            Sair
          </Link>
        </div>
      )}
    </aside>
  );
}
SideBar.propTypes = {
  userRole: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
