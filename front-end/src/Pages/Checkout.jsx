import React from 'react';
import Header from '../Components/Header';

function Checkout(props) {
  return (
    <div>
      <Header pathname={props.history.location.pathname} />
      Cliente - Checkout
    </div>
  );
}

export default Checkout