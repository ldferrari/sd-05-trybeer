const URL = 'http://localhost:3001/orders';

const fetchMeusPedidosData = (id) => fetch(URL, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ id }),
})
  .then((response) => response.json().then((data) => data));

export default fetchMeusPedidosData;
