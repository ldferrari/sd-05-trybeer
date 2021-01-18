import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Restrict from '../Components/Restrict';
import Header from '../Components/Header';
import OrderCard from '../Components/OrderCard';
import { getUserSalesAct } from '../Redux/Actions/sales';

import helper from '../Helper';

const Orders = ({
  history, gettingUserSales, salesList, isLoading,
}) => {
  useEffect(() => {
    try {
      const { id } = helper.getUserData();
      gettingUserSales(id);
    } catch (err) {
      console.error(err);
      // mensagem de usuário inexistente
    }
  }, [gettingUserSales]);

  if (isLoading) return <p>Carregando seus pedidos</p>;

  return (
    <Restrict>
      <Header pathname={ history.location.pathname } />
      {salesList ? (
        <div className="container">
          <ul>
            {salesList.map((ordered, index) => (
              <li key={ helper.generateKey('order') }>
                <OrderCard ordered={ ordered } index={ index } />
              </li>
            ))}
          </ul>
        </div>
      ) : <span>Você não tem pedidos</span>}
    </Restrict>
  );
};

Orders.propTypes = {
  gettingUserSales: PropTypes.func.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  salesList: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.salesRequestReducer.isLoading,
  salesList: state.salesRequestReducer.sales,
});

const mapDispatchToProps = (dispatch) => ({
  gettingUserSales: (id) => dispatch(getUserSalesAct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
