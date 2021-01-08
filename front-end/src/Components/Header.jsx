import React, { useState } from 'react';
import titleForHeader from '../Helper/titleForHeader';
import SideBar from './SideBar';
// refatorar na estilização
const headerStyle = {
  background: '#100F0F',
  width: '375px',
  height: '86px',
};
// refatorar na estilização
const h1Style = {
  fontFamily: 'Roboto',
  fontSize: '36px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '42px',
  letterSpacing: '0em',
  textAlign: 'left',
  color: 'white',
};

export default ({ pathname }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  // func que retorna o título do header baseado no caminho
  let title = titleForHeader(pathname);

  return (
    <div>
      <header style={headerStyle}>
        <button
          onClick={() => setShowSideBar(!showSideBar)}
          data-testid="top-hamburguer"
        >
          abrir menu
        </button>
        <h1 data-testid="top-title" style={h1Style}>
          {title}
        </h1>
      </header>
      {showSideBar ? <SideBar /> : null}
    </div>
  );
};
