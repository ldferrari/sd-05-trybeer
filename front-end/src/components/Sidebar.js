import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Sidebar({ role, active }) {
  return (
    <aside>
      {role === 'client' && (
        <section className={ `${active && 'side-menu-container'} side-bar` }>
          <section>
            <Link to="/products" data-testid="side-menu-item-products">
              Produtos
            </Link>
            <Link to="/orders" data-testid="side-menu-item-my-orders">
              Meus pedidos
            </Link>
            <Link to="/profile" data-testid="side-menu-item-my-profile">
              Meu perfil
            </Link>
          </section>
          <Link
            to="/login"
            data-testid="side-menu-item-logout"
            onClick={ () => localStorage.clear() }
          >
            Sair
          </Link>
        </section>
      )}
      {role === 'administrator' && (
        <section className="admin-side-bar-container side-bar">
          <section>
            <Link to="/admin/orders" data-testid="side-menu-item-orders">
              Meus pedidos
            </Link>
            <Link to="/admin/profile" data-testid="side-menu-item-profile">
              Meu perfil
            </Link>
          </section>
          <Link
            to="/login"
            data-testid="side-menu-item-logout"
            onClick={ () => localStorage.clear() }
          >
            Sair
          </Link>
        </section>
      )}
    </aside>
  );
}

Sidebar.propTypes = {
  role: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
