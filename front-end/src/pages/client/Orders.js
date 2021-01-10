import React, { useEffect } from 'react';
import ClientMenu from '../../components/client/ClientMenu';
import { getUser } from '../../services/localStorage';
// import { getUserSales } from '../../services/fetch';

function Orders() {
  // const [bla, setBla] = useState(initialstatetrueorfalse);
  // const { blu, bli } = useContext(TrybeerContext);
  useEffect(() => {
    const user = getUser();
    const email = user.email;
    console.log(email);
  }, []);

return (
  <div>
    <ClientMenu title="Meus Pedidos" />
  </div>
);
}

export default Orders;
