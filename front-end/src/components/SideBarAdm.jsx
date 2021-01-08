import React from 'react';

import { Link } from 'react-router-dom';

const admin = () => {
  return (
    <ul>
      <Link to="/admin/orders">
        <li data-testid="side-menu-item-orders">Pedidos</li>
      </Link>
      <Link to="/admin/profile">
        <li data-testid="side-menu-item-profile">Perfil</li>
      </Link>
      <span>
        <li></li>
      </span>
      <span>
        <li></li>
      </span>
      <Link to="/login">
        <li
          data-testid="side-menu-item-logout"
          // onClick={() =>()}
        >
          Sair
        </li>
      </Link>
    </ul>
  );
};
