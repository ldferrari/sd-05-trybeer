import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar';
import proptypes from 'prop-types';

import './index.css';

const Header = ({ children }) => {
  const [display, setDisplay] = useState(false);

  return (
    <header>
      <div className="header">
        <button
          type="button"
          className="burguerBtn"
          data-testid="top-hamburguer"
          onClick={ () => { setDisplay(!display); } }
        >
          &#9776;
        </button>
        <h2 data-testid="top-title" className="title">{children}</h2>
      </div>
      { display && <Sidebar /> }
    </header>
  );
};

export default Header;

Header.propTypes = {
  children: proptypes.string.isRequired,
}
