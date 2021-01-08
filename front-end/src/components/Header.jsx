import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import SideBar from './SideBar';
import sidebaricon from '../images/sidebaricon.png';

export default function Header({ children }) {
  const userInfo = JSON.parse(localStorage.getItem('user') || '{}');
  const [btnBurguer, setBtnBurguer] = useState(userInfo.role === 'administrator');
  if (!userInfo.role) return <Redirect to="/login" />;
  return (
    <div>
      <header>
        <button
          data-testid="top-hamburguer"
          onClick={() => setBtnBurguer(!btnBurguer)}
          type="button"
        >
          <img id="btn-hmb" src={sidebaricon} alt="Hamburguer menu icon" />
        </button>
        <img src={sidebaricon} alt="sideb" />
        <span data-testid="top-title" >
          {children}
        </span>
      </header>
      <SideBar userRole={userInfo.role} active={btnBurguer} />
    </div>
  );
}
