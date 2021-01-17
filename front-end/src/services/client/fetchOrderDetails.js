const URL = 'http://localhost:3001/orders/';

const fetchOrderDetails = (id) => fetch(`${URL}${id}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: JSON.stringify({ id }),
}).then((response) => response.json().then((data) => data));

export default fetchOrderDetails;
