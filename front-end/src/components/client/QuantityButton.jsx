import React, {
  useContext,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { ClientContext } from '../../context/client/ClientProvider';

export default function QuantityButton(props) {
  const initialQuantity = 0;
  const negativo = -1;
  const [quantity, setQuantity] = useState(initialQuantity);
  const {
    cart,
    cartItens,
    setCart,
    setCartItens,
  } = useContext(ClientContext);
  const {
    id, index, price, name,
  } = props;

  const updateCart = () => localStorage.setItem('cart', (cart).toString());

  const altQuantity = async (newQuantity) => {
    const cartProducts = JSON.parse(localStorage.getItem('cart itens'));
    const prodIndex = cartProducts.findIndex((i) => i.id === id);
    let newCartItens = cartProducts;

    if (prodIndex !== negativo) {
      if (newQuantity === initialQuantity) {
        newCartItens.splice(prodIndex, 1);
      } else {
        newCartItens[prodIndex] = {
          id, quantity: newQuantity, name, price,
        };
      }
      setCartItens(newCartItens);
    } else {
      newCartItens = [...cartItens, {
        id, quantity: newQuantity, name, price,
      }];
      setCartItens([...cartItens, {
        id, quantity: newQuantity, name, price,
      }]);
    }
    localStorage.setItem('cart itens', JSON.stringify(newCartItens));
  };

  const cartItensLocalStorage = JSON.parse(localStorage.getItem('cart itens')).find((product) => product.id === id);

  const increaseItem = () => {
    let newQuantity;
    const newCartValue = cart + Number(price);
    if (cartItensLocalStorage && cartItensLocalStorage.quantity) {
      newQuantity = cartItensLocalStorage.quantity + 1;
    } else {
      newQuantity = quantity + 1;
    }
    setQuantity(newQuantity);
    setCart(newCartValue);
    updateCart();
    altQuantity(newQuantity);
  };

  function decreaseItem() {
    let newQuantity;
    const newCartValue = cart - Number(price);
    if (cartItensLocalStorage && cartItensLocalStorage.quantity) {
      newQuantity = cartItensLocalStorage.quantity - 1;
    } else {
      newQuantity = quantity - 1;
    }
    if (newQuantity >= initialQuantity) {
      setQuantity(newQuantity);
      altQuantity(newQuantity);
      setCart(newCartValue);
    }
    if (cart >= initialQuantity) {
      updateCart();
    }
  }

  return (
    <div className="quantity-container">
      <button
        type="button"
        className="product-decrease-quantity"
        data-testid={ `${index}-product-minus` }
        onClick={ () => { decreaseItem(); } }
      >
        -
      </button>
      <span
        className="cart-product-quantity"
        key="cart-product-quantity"
        data-testid={ `${index}-product-qtd` }
      >
        { cartItensLocalStorage ? cartItensLocalStorage.quantity : initialQuantity }
        {/* { quantity } */}
      </span>
      <button
        type="button"
        className="product-increase-quantity"
        data-testid={ `${index}-product-plus` }
        onClick={ () => { increaseItem(); } }
      >
        +
      </button>
    </div>
  );
}

QuantityButton.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
