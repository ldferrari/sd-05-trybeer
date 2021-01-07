import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/menu.css';

export default function MenuSuperior(props) {
  const { title } = props;
    return (
      <header className="menuSuperior">
        <input type="checkbox" id="check"/>
        <label className="top-hamburguer" data-testid="top-hamburguer" for="check">&#9776;</label>
        <h1 className="topTitle" data-testid="top-title">{title}</h1>
        <div className="side-menu-container">
          <nav className="menuLateral">
            <div className="menuButton">
              <a href="/products" data-testid="side-menu-item-products" className="buttonLateral">Produtos</a>
              <a href="/orders" data-testid="side-menu-item-my-orders" className="buttonLateral">Meus Pedidos</a>
              <a href="/profile" data-testid="side-menu-item-my-profile" className="buttonLateral">Meu Perfil</a>
            </div>
            <div className="menuButton textCenter">
              <a href="/login" data-testid="side-menu-item-logout" className="buttonLateral">Sair</a>
            </div>
          </nav>
        </div>
      </header>
    )
}
