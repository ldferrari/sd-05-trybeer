import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TryBeerContext from '../context/TryBeerContext';
import Header from '../components/Header';
import Card from '../components/Card';

export default function Products() {
  const { quantity, setQuantity } = useContext(TryBeerContext);

  const product = 'Skol Lata 250ml';
  const index = 0;
  const itemUnitPrice = '2.20';

  const handleClick = () => {
    // e.preventDefault();
    setQuantity(quantity + 1);
    const itemTotalPrice = +quantity * +itemUnitPrice;
    localStorage.setItem('order', JSON.stringify({
      quantity, product, index, itemUnitPrice, itemTotalPrice,
    }));
  };

  return (
    <>
      <Header title="TryBeer" />
        {* <div className="products-list">
        { productsList.map((element) => (
          <Card key={ element } name={ element } />
        )) } */}
      </div>
      <button
        type="button"
        data-testid={ `${index}-product-plus` }
        onClick={ () => handleClick() }
      >
        +
      </button>
      <Link to="/checkout">
        <button
          type="button"
          data-testid="checkout-bottom-btn"
        >
          Ver carrinho
        </button>
      </Link>
    </>
  );
}
