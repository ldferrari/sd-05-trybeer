import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const AdminSideBar = () => (
  <aside className="adminSideBar admin-side-bar-container">
    <ul>
      <li className="adminTitle">Trybeer</li>
      <li className="adminMenuBtnContainer">
        <Link to="/admin/orders" className="adminMenuBtn" data-testid="side-menu-item-orders">
          Pedidos
        </Link>
      </li>
      <li className="adminMenuBtnContainer">
        <Link to="/admin/profile" className="adminMenuBtn" data-testid="side-menu-item-profile">
          Perfil
        </Link>
      </li>
    </ul>
    <ul>
      <li className="adminMenuBtnContainer">
        <Link
          to="/"
          className="adminMenuBtn"
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
