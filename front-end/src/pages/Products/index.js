import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './index.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Card from '../../components/productCard';
import CartButton from '../../components/cartButton';
import { postGetItems } from '../../services/requestAPI';

const Products = (props) => {
  const [theProducts, setProducts] = useState([]);
  const theToken = localStorage.getItem('token');
 
  useEffect(() => {
    async function fetchProducts() {
      const {data} = await postGetItems(theToken);
      setProducts(data)
    }
    fetchProducts();
  }, [theToken]);

  const logged = localStorage.getItem('token');

  if (!logged) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="Products">
      <Header>TryBeer</Header>
      <div className="productList">
        { theProducts.map((product) => <Card key={ product.id } product={ product } />) }
        ,
      </div>
      <CartButton history={ props.history } />
      <Footer />
    </div>
  );
};

export default Products;

Products.propTypes = { history: PropTypes.instanceOf(Object).isRequired };
