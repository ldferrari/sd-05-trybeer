import React from 'react';
import PropTypes from 'prop-types';
import '../../css/menu.css';

export default function Menu(props) {
  const { title } = props;

  function menuChecked() {
    if (document.getElementById('check').checked) {
      document.getElementsByClassName('side-menu-container')[0].style.left = '0%';
    }
    if (!document.getElementById('check').checked) {
      document.getElementsByClassName('side-menu-container')[0].style.left = '-40%';
    }
  }

  return (
    <header className="menuSuperior">
      <label className="top-hamburguer" data-testid="top-hamburguer" htmlFor="check">
        &#9776;
        <input type="checkbox" id="check" onChange={ () => menuChecked() } />
      </label>
      <h1 className="topTitle" data-testid="top-title">{title}</h1>
      <div className="side-menu-container">
        <nav className="menuLateral">
          <div className="menuButton">
            <a href="/products" data-testid="side-menu-item-products" className="buttonLateral">Produtos</a>
            <a href="/orders" data-testid="side-menu-item-my-orders" className="buttonLateral">Meus Pedidos</a>
            <a href="/profile" data-testid="side-menu-item-my-profile" className="buttonLateral">Meu Perfil</a>
          </div>
          <div className="menuButton textCenter">
            <a href="/login" data-testid="side-menu-item-logout" className="buttonLateral">Sair</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
};