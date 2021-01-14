import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Footer from '../../components/footer';
import CardOrderDetails from '../../components/CardOrdersDetails';
import propTypes from 'prop-types';
import { prototype } from 'mysql2/typings/mysql/lib/PoolCluster';

// import { getSales } from '../../services/requestAPI';

const OrderAdminDetails = () => {
  // const [allOrders, setAllOrders] = useState([]);
  const { orderDetails } = useContext(AppContext);

  return (
    <div className="Orders">
      <div className="pedido">
        <h2 className="checkoutitle">Pedidos Pendentes</h2>
        <div className="cartItems">
          <CardOrderDetails order={ orderDetails } />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderAdminDetails;

OrderAdminDetails.propTypes = {
  history: propTypes.func.isRequired,
};
