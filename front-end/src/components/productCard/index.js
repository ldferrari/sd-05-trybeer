import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import PropTypes from 'prop-types'; 
import './index.css';

const Card = (props) => {
  const { cart, setCart } = useContext(AppContext);

  const { product } = props;

  const exists = cart.find((produto) => produto.id === product.id);

  const minusOne = () => {
    // const exists = cart.find((produto) => produto.id === product.id);
    return exists
      ? setCart(cart.map((e) => e.id === product.id ? { ...e, qty: e.qty <= 0 ? 0 : e.qty - 1 } : e))
      : null;
  };

  const plusOne = () => {
    // const exists = cart.find((produto) => produto.id === product.id);
    return exists
      ? setCart(
          cart.map((e) =>
            e.id === product.id ? { ...e, qty: e.qty + 1 } : e
          )
        )
      : setCart([...cart, {id: product.id, name: product.name, price: product.price, qty: 1}]);
  };

  return (
    <div className="card" key={product.name}>
      <img
        src={product.url_image}
        alt={product.name}
        data-testid={`${product.id - 1}-product-img`}
      />
      <p data-testid={`${product.id - 1}-product-name`}>{product.name}</p>
      <h4 data-testid={`${product.id - 1}-product-price`}>
        R$
        {product.price}
      </h4>
      <div className="cardBottom">
        <button
          type="button"
          data-testid={`${product.id - 1}-product-minus`}
          onClick={() => minusOne()}
        >
          -
        </button>
        <p data-testid={`${product.id - 1}-product-qtd`}>{ exists ? exists.qty : 0 }</p>
        <button
          type="button"
          data-testid={`${product.id - 1}-product-plus`}
          onClick={() => plusOne()}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  product: PropTypes.object.isRequired,
  product.id: PropTypes.number,
  product.name: PropTypes.string,
};
