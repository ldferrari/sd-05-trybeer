import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../../components/client/Menu';
import { ClientContext } from '../../context/client/ClientProvider';

export default function ClientCheckoutPage() {
  const zero = 0;
  const two = 2;
  const twoSeconds = 2000;
  const token = localStorage.getItem('token') || null;
  const {
    cart,
    setCart,
    cartItens,
    setCartItens,
  } = useContext(ClientContext);
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [purchaseDone, setPurchaseDone] = useState(false);
  const [redirect, setRedirect] = useState(false);

  // criei esse localCartItens porque o cartItens global está vindo como string e não
  // consegui identificar o motivo
  const [localCartItens, setLocalCartItens] = useState(JSON.parse(localStorage.getItem('cart itens')));

  useEffect(() => {
    setCartItens(JSON.parse(localStorage.getItem('cart itens')));
  }, [setCartItens]);

  const removeProduct = (index) => {
    const newCartItens = cartItens.filter((item, i) => i !== index);
    const newCart = newCartItens
      .reduce((acc, elem) => acc + ((Number(elem.price) * Number(elem.quantity))), zero);
    localStorage.setItem('cart itens', JSON.stringify(newCartItens));
    localStorage.setItem('cart', (newCart));
    setLocalCartItens(newCartItens);
    setCartItens(newCartItens);
    setCart(newCart);
  };

  const handleClick = () => {
    setPurchaseDone(true);
    setTimeout(() => setRedirect(true), twoSeconds);
  };

  if (!token) return <Redirect to="/login" />;
  if (redirect) return <Redirect to="/products" />;

  return (
    <div style={ { marginTop: '100px' } }>
      <Menu title="Finalizar Pedido" />
      { (localCartItens.length === zero) && <div>Não há produtos no carrinho</div> }
      { (localCartItens.length !== zero) && localCartItens.map((product, index) => (
        <div key={ product.id }>
          <span data-testid={ `${index}-product-qtd-input` }>{product.quantity}</span>
          <span data-testid={ `${index}-product-name` }>{product.name}</span>
          <span data-testid={ `${index}-product-total-value` }>{` R$ ${((Number(product.price)) * (Number(product.quantity))).toFixed(two).replace('.', ',')}`}</span>
          <span data-testid={ `${index}-product-unit-price` }>{`(R$ ${Number(product.price).toFixed(two).replace('.', ',')} un)`}</span>
          <button
            data-testid={ `${index}-removal-button` }
            type="button"
            onClick={ () => removeProduct(index) }
          >
            X
          </button>
        </div>)) }
      <div>
        <span data-testid="order-total-value">{`Total: R$ ${Number(cart).toFixed(two).replace('.', ',')}`}</span>
      </div>
      <div>
        <label htmlFor="street">
          Rua
          <input
            data-testid="checkout-street-input"
            id="street"
            type="text"
            onChange={ (event) => setStreet(event.target.value) }
          />
        </label>
        <label htmlFor="number">
          Número da casa
          <input
            data-testid="checkout-house-number-input"
            id="number"
            type="number"
            onChange={ (event) => setStreetNumber(event.target.value) }
          />
        </label>
      </div>
      <button
        data-testid="checkout-finish-btn"
        type="button"
        disabled={ (cart === zero) || (street === '') || (streetNumber === '') }
        onClick={ () => handleClick() }
      >
        Finalizar Pedido
      </button>
      { purchaseDone && <div>Compra realizada com sucesso!</div> }
    </div>
  );
}
