import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GeneralContext from '../../context/general/GeneralContext';
import '../../css/admin/menuAdm.css';

export default function MenuAdm() {
  const { setUserData, initialUser } = useContext(GeneralContext);
  return (
    <div className="side-menu-container-adm">
      <h1 className="topTitleAdm">TryBeer</h1>
      <nav className="menuLateralAdm">
        <div className="menuButtonAdm">
          <Link to="/admin/orders" data-testid="side-menu-item-orders" className="buttonLateralAdm">Pedidos</Link>
          <Link to="/admin/profile" data-testid="side-menu-item-profile" className="buttonLateralAdm">Perfil</Link>
        </div>
        <div className="menuButtonAdm textCenter">
          <Link
            to="/login"
            data-testid="side-menu-item-logout"
            className="buttonLateralAdm"
            onClick={ () => { localStorage.setItem('token', ''); setUserData({ initialUser }); } }
          >
            Sair
          </Link>
        </div>
      </nav>
    </div>
  );
}
