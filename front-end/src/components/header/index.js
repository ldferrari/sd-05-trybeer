import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import './index.css';

const Header = ({ children }) => {
  const [display, setDisplay] = useState(false);

  return (
    <header>
      <div className="header">
        <button
          type="button"
          className="burguerBtn"
          data-testid="top-hamburguer"
          // onClick="openMenu()"
          onClick={ () => { setDisplay(!display) } }
        >
        &#9776;
        </button>
        <h2 data-testid="top-title" className="title">{children}</h2>
        </div>
        { display && <aside className="sideBar side-menu-container">
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
              <Link Link to="/" className="menuBtn" data-testid="side-menu-item-logout">Sair</Link>
            </li>
          </ul>
        </aside>}
    </header>
  );
};

export default Header;

// Header.defaultProps = {
//   hideSearch: false,
// };

// Header.propTypes = {
// //    hideSearch: PropTypes.bool,
//   children: PropTypes.string.isRequired,
// };
