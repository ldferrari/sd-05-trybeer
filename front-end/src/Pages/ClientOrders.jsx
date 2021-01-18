import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import OrderCard from "../Components/OrderCard";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { getUserSalesAct } from '../Redux/Actions/sales'

const Orders = ({ history, gettingUserSales, salesList, isLoading }) => {
  const local = JSON.parse(localStorage.getItem("trybeer"));
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const user = local ? local.user : null
  useEffect(() => {
    if (!user) return setShouldRedirect(true);
    const id = user ? user.id : null
    if (id) {
      gettingUserSales(id);
    }
  }, []);
  
  if (shouldRedirect) return <Redirect to="/login" />;
  if (isLoading) return <p>Carregando seus pedidos</p>

  return (
    <div>
      <Header pathname={ history.location.pathname } />
      {salesList ? (
        <div className="container">
          <ul>
            {salesList.map((ordered, index) => {
              console.log(ordered, index);
              return (
                  <li>
                    <OrderCard ordered={ordered} index={index} />
                  </li>
                )})
            }
          </ul>
        </div>
      ) : <span>Você não tem pedidos</span>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.salesRequestReducer.isLoading,
  salesList: state.salesRequestReducer.sales,
});

const mapDispatchToProps = (dispatch) => ({
  gettingUserSales: (id) => dispatch(getUserSalesAct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
