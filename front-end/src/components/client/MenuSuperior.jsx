import React, { Component } from 'react';
import '../../css/menuSuperior.css';

export default class MenuSuperior extends Component {
  render() {
    return (
      <header className="menuSuperior">
	      <button
          type="button"
          className="buttonHamburguer"
          data-testid="top-hamburguer"
        >&#9776;</button>
        <h1 className="topTitle" data-testid="top-title">Trybeer</h1>
      </header>
    )
  }
}
