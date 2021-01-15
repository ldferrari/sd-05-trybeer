// ref https://medium.com/@renan.serverti/aprenda-frontend-como-criar-um-menu-toggle-responsivo-com-css-4f7f7a2ac07a
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/ClientMenu.css';

function ClientMenu(props) {
  const [click, setClick] = useState(false);
  const { title } = props;

  function openClose() {
    if (document.getElementById('check').checked) {
      setClick(true);
    }
    if (!document.getElementById('check').checked) {
      setClick(false);
    }
  }

  const left = (click) ? '0' : '-40%';
  const display = (click) ? 'block' : 'none';

  return (
    <header className="menu-superior">
      <label className="top-hamburguer" data-testid="top-hamburguer" htmlFor="check">
        &#9776;
        <input type="checkbox" id="check" onChange={ () => openClose() } />
      </label>
      <h1 className="top-title" data-testid="top-title">
        {title}
      </h1>
      <div className="side-menu-container" style={ { left, display } }>
        <nav className="side-menu">
          <div className="btn-menu">
            <Link className="btn-side" data-testid="side-menu-item-products" to="/products">
              Produtos
            </Link>
            <Link className="btn-side" data-testid="side-menu-item-my-orders" to="/orders">
              Meus Pedidos
            </Link>
            <Link className="btn-side" data-testid="side-menu-item-my-profile" to="/profile">
              Meu Perfil
            </Link>
            <Link className="btn-side" data-testid="side-menu-item-logout" to="/login">
              Sair
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default ClientMenu;

ClientMenu.propTypes = {
  title: PropTypes.string.isRequired,
};
