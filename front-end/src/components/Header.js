import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SideBar from './SideBar';
import sidebaricon from '../images/sidebaricon.png';
import './cssComponents/header.css';

export default function Header({ children }) {
  // const userInfo = JSON.parse(localStorage.getItem('role') || '{}');
  const userInfo = localStorage.role || '';
  const [btnBurguer, setBtnBurguer] = useState(userInfo === 'administrator');
  // if (!userInfo) return <Redirect to="/login" />;
  document.title = children === 'Products' ? 'TryBeer' : children;
  return (
    <div className="xtudo">
      <header className="sandubao">
        <button
          className="bamburguer"
          data-testid="top-hamburguer"
          onClick={ () => setBtnBurguer(!btnBurguer) }
          type="button"
        >
          <img id="btn-hmb" height="50px" width="50px" src={ sidebaricon } alt="Hamburguer menu icon" />
        </button>
        <span className="title" data-testid="top-title">{children === 'Products' ? 'TryBeer' : children}</span>
      </header>
      <div>{btnBurguer && <SideBar userRole={ userInfo } active={ btnBurguer } />}</div>
    </div>
  );
}
Header.propTypes = {
  children: PropTypes.string.isRequired,
};
