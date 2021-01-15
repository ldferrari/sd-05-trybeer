import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import TryBeerContext from '../context/TryBeerContext';
// const [total ] = useState(''); está vindo de products

import Header from '../components/Header';
// import Orders from './Orders';
// "OrderDetailCard"   card que será import de Page/Orders
import Card from '../components/Card'; // chamando somente para testar o render dos produto na lista

import { getAllProducts } from '../services/ApiTrybeer';

const OrdersDetails = () => {
  // ---------------------------------------------//
  // const para test (mock)
  const orderInfoPedido = 1;
  const orderInfoDataSale = '26/01';
  // ---------------------------------------------//
  const { total, productsList } = useContext(TryBeerContext);
  const userData = JSON.parse(localStorage.getItem('user'));
  const token = userData && userData.token;

  useEffect(() => {
    getAllProducts(token)
      .then((products) => productsList(products))
      .catch((err) => err);
  }, [productsList, token]);

  if (!token) return <Redirect to="/login" />;
  return (
    <section>
      <Header title="Detalhes de Pedido" />
      <section>
        <span data-testid="order-number">
          Pedido
          {[orderInfoPedido]}
          {/* numero do pedido vindo de orders */}
        </span>
        <span data-testid="order-date">
          date
          {[orderInfoDataSale]}
        </span>
        <span>
          { productsList.map((product, index) => (
            <Card
              index={ index }
              key={ product.id }
              product={ product }
            />
          )) }
        </span>
      </section>
      <span data-testid="order-total-value">
        Total: R$
        {(total)}
      </span>
    </section>
  );
};

// A quantidade do produto deverá conter a tag data-testid="0-product-qtd"

// O nome do produto deverá conter a tag data-testid="0-product-name"

// O valor total do produto deverá conter a tag data-testid="0-product-total-value"

export default OrdersDetails;
