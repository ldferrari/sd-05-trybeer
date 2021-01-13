import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import TryBeerContext from '../context/TryBeerContext';
import Sidebar from './Sidebar';

export default function Header(props) {
<<<<<<< HEAD
  const [role] = useState('administrator');
  const [active, setActive] = useState(false);
=======
  const userData = JSON.parse(localStorage.getItem('user'));
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  // const role = userData?.user?.role;
  const role = userData && userData.user && userData.user.role;
  const [active, setActive] = useState(role === 'administrator');
>>>>>>> d8cb8c0ba5e3dda59bb112adc7ae49945dbba79c
  const { title } = props;

  return (
    <section>
      <header>
        <button
          data-testid="top-hamburguer"
          type="button"
          onClick={ () => setActive(!active) }
        >
          BURGER
        </button>
        <span data-testid="top-title">{ title }</span>
      </header>
      {active && <Sidebar role={ role } active={ active } />}
    </section>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
