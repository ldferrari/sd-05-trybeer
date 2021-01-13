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
    let newNew = cartProducts;

    if (prodIndex !== negativo) {
      if (newQuantity === initialQuantity) {
        newNew.splice(prodIndex, 1);
      } else {
        newNew[prodIndex] = {
          id, quantity: newQuantity, name, price,
        };
      }
      setCartItens(newNew);
    } else {
      newNew = [...cartItens, {
        id, quantity: newQuantity, name, price,
      }];
      setCartItens([...cartItens, {
        id, quantity: newQuantity, name, price,
      }]);
    }
    localStorage.setItem('cart itens', JSON.stringify(newNew));
  };

  const increaseItem = () => {
    const newQuantity = quantity + 1;
    const newCartValue = cart + Number(price);
    setQuantity(newQuantity);
    setCart(newCartValue);
    updateCart();
    altQuantity(newQuantity);
  };

  function decreaseItem() {
    const newQuantity = quantity - 1;
    const newCartValue = cart - Number(price);
    if (newQuantity >= initialQuantity) {
      setQuantity(newQuantity);
      altQuantity(newQuantity);
      setCart(newCartValue);
    }
    if (cart >= initialQuantity) {
      updateCart();
    }
  }

  // const cartItensLocalStorage =
  // JSON.parse(localStorage.getItem('cart itens')).find((product) => product.id === id);

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
        {/* { cartItensLocalStorage ? cartItensLocalStorage.quantity : initialQuantity } */}
        { quantity }
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
