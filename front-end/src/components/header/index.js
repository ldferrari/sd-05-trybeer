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
          className="burguerBtn"
          data-testid="top-hamburguer"
          // onClick="openMenu()"
          onClick={() => { setDisplay(!display)}}
          >
          &#9776;
        </button>
        <h2 data-testid="top-title" className="title">{children}</h2>
        { display && <aside className="sideBar">
          <ul>
            <li className="menuBtn"><Link className="menuBtn" to="/cliente-produtos"> Produtos</Link></li>
            <li className="menuBtn"><Link to="/cliente-pedidos" className="menuBtn">Meus pedidos</Link></li>
            <li className="menuBtn"><Link to="/cliente-perfil" className="menuBtn">Meu Perfil</Link></li>
          </ul>
          <ul>
            <li className="menuBtn"><Link Link to="/" className="menuBtn">Sair</Link></li>
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