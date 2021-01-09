import React from 'react';
import Header from '../Components/Header';

function Products(props) {
  return (
    <div>
      <Header pathname={props.history.location.pathname} />
      Cliente - Produtos
    </div>
  );
}

export default Products;