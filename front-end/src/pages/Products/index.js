import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Card from '../../components/productCard';
import CartButton from '../../components/cartButton';
import { postGetItems } from '../../services/requestAPI';
import AppContext from '../../context/AppContext';

const Products = (props) => {
  const { history } = props;
  const [theProducts, setProducts] = useState([]);
  const { alertCompraFinalizada, setAlertCompraFinalizada } = useContext(AppContext);
  // const theToken = localStorage.getItem('token');

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await postGetItems(localStorage.getItem('token'));
      setProducts(data);
    }
    fetchProducts();
    return () => setAlertCompraFinalizada('');
  }, [setAlertCompraFinalizada]);

  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="Products">
      <Header>TryBeer</Header>
      <div className="productList">
        { theProducts.map((product) => <Card key={ product.id } product={ product } />) }
        ,
      </div>
      <span>{ alertCompraFinalizada }</span>
      <CartButton history={ history } />
      <Footer />
    </div>
  );
};

export default Products;

Products.propTypes = { history: PropTypes.instanceOf(Object).isRequired };
