import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../css/menu.css';
import { Link } from 'react-router-dom';

export default function Menu(props) {
  const { title } = props;
  const [isVisible, setIsVisible] = useState(false);

  function menuChecked() {
    if (document.getElementById('check').checked) {
      setIsVisible(true);
    }
    if (!document.getElementById('check').checked) {
      setIsVisible(false);
    }
  }

  return (
    <header className="menuSuperior">
      <label className="top-hamburguer" data-testid="top-hamburguer" htmlFor="check">
        &#9776;
        <input type="checkbox" id="check" onChange={ () => menuChecked() } />
      </label>
      <h1 className="topTitle" data-testid="top-title">{title}</h1>
      {isVisible && (
        <div className="side-menu-container">
          <nav className="menuLateral">
            <div className="menuButton">
              <Link to="/products" data-testid="side-menu-item-products" className="buttonLateral">Produtos</Link>
              <Link to="/orders" data-testid="side-menu-item-my-orders" className="buttonLateral">Meus Pedidos</Link>
              <Link to="/profile" data-testid="side-menu-item-my-profile" className="buttonLateral">Meu Perfil</Link>
            </div>
            <div className="menuButton textCenter">
              <Link to="/login" data-testid="side-menu-item-logout" className="buttonLateral">Sair</Link>
            </div>
          </nav>
        </div>
      ) }
    </header>
  );
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
};
