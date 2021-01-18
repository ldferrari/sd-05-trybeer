import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/ClientMenu.css';

function AdminMenu() {

  const [click, setClick] = useState(false);

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
       Trybeer 
      </h1>
      <div className="side-menu-container" style={ { left, display } }>
        <nav className="side-menu">
          <div className="btn-menu">
          <Link className="btn-side" data-testid="side-menu-item-orders" to="/admin/orders">
          Pedidos
        </Link>
        <Link className="btn-side" data-testid="side-menu-item-profile" to="/admin/profile">
          Perfil
        </Link>
        <Link
          className="btn-side"
          data-testid="side-menu-item-logout"
          to="/login"
          onClick={ () => localStorage.clear() }
        >
          Sair
        </Link>
          </div>
        </nav>
      </div>
    </header>
    // <div className="admin-side-bar-container">
    //   <h2>TryBeer</h2>
    //   <nav>
    //     <Link className="btn-side" data-testid="side-menu-item-orders" to="/admin/orders">
    //       Pedidos
    //     </Link>
    //     <Link className="btn-side" data-testid="side-menu-item-profile" to="/admin/profile">
    //       Perfil
    //     </Link>
    //     <Link
    //       className="btn-side"
    //       data-testid="side-menu-item-logout"
    //       to="/login"
    //       onClick={ () => localStorage.clear() }
    //     >
    //       Sair
    //     </Link>
    //   </nav>
    // </div>
  );
}

export default AdminMenu;
