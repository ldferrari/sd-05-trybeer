import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard';
import Helpers from '../Helper/index';
import { repopulatingAct } from '../Redux/Actions';
import Restrict from '../Components/Restrict';

const zero = 0;

function Products({
  products, totalPrice, history, isLoading, cart, repopulatingStore,
}) {
  const [redirect, setRedirect] = useState(null);

  const total = cart.reduce((acc, product) => acc + (product.quantity * product.price), zero);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart'));
    if (localCart) repopulatingStore(localCart);
  }, [repopulatingStore]);

  if (isLoading) return <p>Loading...</p>;
  const totalPriceLocal = localStorage.getItem('totalPrice');
  if (redirect) return <Redirect to={ redirect } />;
  // if (condição massa ) return <Redirect to="/login" />;
  return (
    <Restrict>
      <Header pathname={ history.location.pathname } />
      <h1>Produtos</h1>
      {products.map((product) => (
        <ProductCard key={ product.id } product={ product } />
      ))}
      <button
        type="button"
        disabled={ !totalPrice && !totalPriceLocal }
        data-testid="checkout-bottom-btn"
        onClick={ () => setRedirect('/checkout') }
        to="/checkout"
      >
        Ver Carrinho
        <p on data-testid="checkout-bottom-btn-value">
          {/* transferi a lógica de duas casas decimais diretamente para a funcao transformPrice */}
          {`R$ ${Helpers.transformPrice(total)}`}
        </p>
      </button>
    </Restrict>
  );
}

Products.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  cart: PropTypes.shape(Object).isRequired,
  repopulatingStore: PropTypes.func.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
  products: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.productsRequestReducer.products,
  totalPrice: state.productsRequestReducer.totalPrice,
  userData: state.userRequestReducer.userData,
  cart: state.productsRequestReducer.cart,
});

const mapDispatchToProps = (dispatch) => ({
  repopulatingStore: (cart) => dispatch(repopulatingAct(cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
