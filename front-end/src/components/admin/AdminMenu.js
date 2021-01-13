import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/ClientMenu.css';

function AdminMenu() {
  return (
    <div className="admin-side-bar-container">
      <h2>TryBeer</h2>
      <nav>
        <Link className="btn-side" data-testid="side-menu-item-orders" to="/admin/orders">
          Pedidos
        </Link>
        <Link className="btn-side" data-testid="side-menu-item-profile" to="/admin/profile">
          Perfil
        </Link>
        <Link
          className="btn-side"
          data-testid="side-menu-item-logout"
          to="/login"
          onClick={ () => localStorage.clear() }
        >
          Sair
        </Link>
      </nav>
    </div>
  );
}

export default AdminMenu;
