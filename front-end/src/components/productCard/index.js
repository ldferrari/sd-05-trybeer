import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';
import './index.css';

const Card = (props) => {
  const { cart, setCart } = useContext(AppContext);

  const { product } = props;

  const exists = cart.find((produto) => produto.id === product.id);

  const minusOne = () => {
    const zero = 0;
    // const exists = cart.find((produto) => produto.id === product.id);
    const newProduct = (e) => ({ ...e, quantity: e.quantity <= zero ? zero : e.quantity - 1 });
    if (exists) {
      setCart(cart.map((e) => (e.id === product.id ? newProduct(e) : e)));
    }
    return null;
  };

  const plusOne = () => {
    const um = 1;
    return exists
      ? setCart(
        cart.map((e) => (e.id === product.id ? { ...e, quantity: e.quantity + 1 } : e)),
      )
      : setCart(
        [
          ...cart, {
            id: product.id, name: product.name, price: product.price, quantity: um,
          },
        ],
      );
  };
  const zero = 0;
  return (
    <div className="card" key={ product.name }>
      <img
        src={ product.url_image }
        alt={ product.name }
        data-testid={ `${product.id - 1}-product-img` }
      />
      <p data-testid={ `${product.id - 1}-product-name` }>{ product.name }</p>
      <h4 data-testid={ `${product.id - 1}-product-price` }>
        {`R$ ${product.price.toString().replace('.', ',')}` }
      </h4>
      <div className="cardBottom">
        <button
          type="button"
          className="maisOuMenos"
          data-testid={ `${product.id - 1}-product-minus` }
          onClick={ () => minusOne() }
        >
          -
        </button>
        <p data-testid={ `${product.id - 1}-product-qtd` }>{ exists ? exists.quantity : zero }</p>
        <button
          type="button"
          className="maisOuMenos"
          data-testid={ `${product.id - 1}-product-plus` }
          onClick={ () => plusOne() }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
  }).isRequired,
};
