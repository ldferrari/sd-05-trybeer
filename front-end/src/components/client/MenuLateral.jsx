import React, { Component } from 'react'
import '../../css/menuLateral.css';

export default class MenuLateral extends Component {
  render() {
    return (
      <div className="menuLateral">
        <div>
          <a data-testid="side-menu-item-products" className="buttonLateral">Produtos</a>
          <a data-testid="side-menu-item-my-orders" className="buttonLateral">Meus Pedidos</a>
          <a data-testid="side-menu-item-my-profile" className="buttonLateral">Meu Perfil</a>
        </div>
	      <a data-testid="side-menu-item-logout" className="buttonLateral">Sair</a>
      </div>
    )
  }
}
