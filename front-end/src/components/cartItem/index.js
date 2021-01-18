import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';
import './index.css';

const CartItem = (props) => {
  const { cart, setCart } = useContext(AppContext);

  const { item, index } = props;

  const exists = cart.find((produto) => produto.id === item.id);

  const zero = 0;
  const two = 2;
  if (!exists || exists.quantity === zero) {
    return null;
  }

  const exclude = () => {
    const itemZero = (e) => ({ ...e, quantity: zero });
    if (exists) {
      setCart(cart.map((e) => (e.id === item.id ? itemZero(e) : e)));
    }
    return null;
  };

  return (
    <div className="cartItem" key={ item.name }>
      <p data-testid={ `${index}-product-qtd-input` }>{ exists.quantity ? exists.quantity : zero }</p>
      <p data-testid={ `${index}-product-name` }>{ item.name }</p>
      <p data-testid={ `${index}-product-unit-price` }>
        {`(R$ ${item.price.toString().replace('.', ',')} un)`}
      </p>
      <p data-testid={ `${index}-product-total-value` }>
        { `R$ ${(item.price * item.quantity).toFixed(two).replace('.', ',')}` }
      </p>
      <button
        type="button"
        data-testid={ `${index}-removal-button` }
        onClick={ () => exclude() }
      >
        X
      </button>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};
