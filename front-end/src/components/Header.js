import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';

export default function Header(props) {
  const [role] = useState('administrator');
  const [active, setActive] = useState(false);
  const { title } = props;

  return (
    <section>
      <header>
        <button data-testid="top-hamburguer" type="button" onClick={ () => setActive(!active) }>
          BURGER
        </button>
        <span data-testid="top-title">{title}</span>
      </header>
      {active && <Sidebar role={ role } active={ active } />}
    </section>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
