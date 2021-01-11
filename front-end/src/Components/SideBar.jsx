import React from 'react';
import { Link } from 'react-router-dom';
// estilo rascunho
const sideBarStyle = {
  position: 'absolute',
  width: '249px',
  height: '581px',
  left: '0px',
  top: '86px',
  background: '#100F0F',
  display: 'flex',
  flexDirection: 'column',
};

function SideBar() {
  return (
    <div style={ sideBarStyle } className="side-menu-container">
      <Link to="/products" data-testid="side-menu-item-products">
        Produtos
      </Link>
      <Link to="/orders" data-testid="side-menu-item-my-orders">
        Meus Pedidos
      </Link>
      <Link to="/profile" data-testid="side-menu-item-my-profile">
        Meu Perfil
      </Link>
      <Link to="/" data-testid="side-menu-item-logout">
        Sair
      </Link>
    </div>
  );
}

export default SideBar;
