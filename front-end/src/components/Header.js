import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SideBar from './SideBar';
import sidebaricon from '../images/sidebaricon.png';

export default function Header({ children }) {
  // const userInfo = JSON.parse(localStorage.getItem('role') || '{}');
  const userInfo = localStorage.role || '';
  const [btnBurguer, setBtnBurguer] = useState(false);
  // if (!userInfo) return <Redirect to="/login" />;
  document.title = children;
  return (
    <div>
      <header>
        <button
          data-testid="top-hamburguer"
          onClick={ () => setBtnBurguer(!btnBurguer) }
          type="button"
        >
          <img id="btn-hmb" src={ sidebaricon } alt="Hamburguer menu icon" />
        </button>
        {/* <img src={ sidebaricon } alt="sideb" /> */}
        <span data-testid="top-title">Trybeer</span>
      </header>
      <SideBar userRole={ userInfo } active={ btnBurguer } />
    </div>
  );
}
Header.propTypes = {
  children: PropTypes.string.isRequired,
};
