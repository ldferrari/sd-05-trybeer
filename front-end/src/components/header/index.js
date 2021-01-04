import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.css';

const Header = ({ children }) => {
  const [display, setDisplay] = useState(false);

  return (
    <Fragment>
      <div className="header">
        <button 
          className="burgerBtn"
          data-testid="top-hamburguer"
          // onClick="openMenu()"
          onClick={() => { setDisplay(!display)}}
          >
          &#9776;
        </button>
        <h2 data-testid="top-title" className="title">{children}</h2>
        { display && <aside className="sideBar">
          <ul>
            <li>
              <Link to="/cliente-produtos"> Produtos</Link>
            </li>
            <li>
              <Link to="/cliente-pedidos">Meus pedidos</Link>
            </li>
            <li>
              <Link to="/cliente-perfil">Meu Perfil</Link>
            </li>
            <li>
            <Link to="/">Sair</Link>
            </li>
          </ul>
        </aside>}
      </div>
      {/* <div className="header-bottom">{display && <SearchBar recipeType={children} />}</div> */}
    </Fragment>
  );
};

export default Header;

// Header.defaultProps = {
//   hideSearch: false,
// };

Header.propTypes = {
//    hideSearch: PropTypes.bool,
  children: PropTypes.string.isRequired,
};