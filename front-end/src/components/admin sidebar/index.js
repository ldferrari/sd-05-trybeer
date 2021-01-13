import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const AdminSideBar = () => (
  <aside className="sideBar side-menu-container">
    <ul>
      <li className=".title">Trybeer</li>
      <li className="menuBtn">
        <Link to="/admin/orders" className="menuBtn" data-testid="side-menu-item-my-orders">
          Pedidos
        </Link>
      </li>
      <li className="menuBtn">
        <Link to="/admin/profile" className="menuBtn" data-testid="side-menu-item-my-profile">
          Perfil
        </Link>
      </li>
    </ul>
    <ul>
      <li className="menuBtn">
        <Link
          to="/"
          className="menuBtn"
          data-testid="side-menu-item-logout"
          onClick={ () => { localStorage.removeItem('token'); } }
        >
          Sair
        </Link>
      </li>
    </ul>
  </aside>
);

export default AdminSideBar;
