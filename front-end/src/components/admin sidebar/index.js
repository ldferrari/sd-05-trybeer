import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const AdminSideBar = () => (
  <aside className="sideBar-admin admin-side-bar-container">
    <ul>
      <li className=".title">Trybeer</li>
      <li className="menuBtnAdmin">
        <Link to="/admin/orders" className="menuBtnAdmin" data-testid="side-menu-item-orders">
          Pedidos
        </Link>
      </li>
      <li className="menuBtnAdmin">
        <Link to="/admin/profile" className="menuBtnAdmin" data-testid="side-menu-item-profile">
          Perfil
        </Link>
      </li>
    </ul>
    <ul>
      <li className="menuBtnAdmin">
        <Link
          to="/"
          className="menuBtnAdmin"
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
