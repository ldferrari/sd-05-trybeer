// ref https://medium.com/@renan.serverti/aprenda-frontend-como-criar-um-menu-toggle-responsivo-com-css-4f7f7a2ac07a
import React from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import PropTypes from 'prop-types';
// import { TrybeerContext } from '../context/TrybeerContext';
import '../../css/ClientMenu.css';

function ClientMenu(props) {
  // const [click, setClick] = useState(false);
  const { title } = props;

  function openClose() {
    if (document.getElementById('check').checked) {
      document.getElementsByClassName('side-menu-container')[0].style.left = '0%';
    }
    if (!document.getElementById('check').checked) {
      document.getElementsByClassName('side-menu-container')[0].style.left = '-40%';
    }
  }

  return (
    <div className="menu-header orange-background">
      <header>
      <div className="header-content">
      <label className="top-hamburguer" data-testid="top-hamburguer" htmlFor="check">
        &#9776;
        <input type="checkbox" id="check" onChange={ () => openClose() } />
      </label>
      <h4 className="top-title" data-testid="top-title" className="white-text">
        {title}
      </h4>
      <div></div>
      </div>
    </header>
      <div className="side-menu-container orange-background">
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
    </div>
  );
}

export default ClientMenu;

ClientMenu.propTypes = {
  title: PropTypes.string.isRequired,
};
