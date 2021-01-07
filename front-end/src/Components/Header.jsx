import React from 'react';
import titleForHeader from '../Helper/titleForHeader';

const headerStyle = {
  background: '#100F0F',
  width: '375px',
  height: '86px',
};

const h1Style = {
  'font-family': 'Roboto',
  'font-size': '36px',
  'font-style': 'normal',
  'font-weight': '400',
  'line-height': '42px',
  'letter-spacing': '0em',
  'text-align': 'left',
  'color': 'white',
};

export default ({ pathname }) => {
  // func que retorna o título do header baseado no caminho
  let title = titleForHeader(pathname);

  return (
    <div>
      <header style={headerStyle}>
        <h1 style={h1Style}>{title}</h1>
      </header>
    </div>
  );
};
