import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => (
  <aside className="sideBar side-menu-container">
    <ul>
      <li className="menuBtn">
        <Link className="menuBtn" to="/products" data-testid="side-menu-item-products">
          Produtos
        </Link>
      </li>
      <li className="menuBtn">
        <Link to="/orders" className="menuBtn" data-testid="side-menu-item-my-orders">
          Meus pedidos
        </Link>
      </li>
      <li className="menuBtn">
        <Link to="/profile" className="menuBtn" data-testid="side-menu-item-my-profile">
          Meu Perfil
        </Link>
      </li>
    </ul>
    <ul>
      <li className="menuBtn">
        <Link
          to="/"
          className="menuBtn"
          data-testid="side-menu-item-logout"
          onClick={ () => {
            localStorage.removeItem('token');
            localStorage.removeItem('cart');
          } }
        >
          Sair
        </Link>
      </li>
    </ul>
  </aside>
);

export default SideBar;
