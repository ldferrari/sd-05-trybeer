const URL = 'http://localhost:3001/checkout';

const fetchSalesData = (salesData) => fetch(URL, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(salesData),
})
  .then((response) => response.json().then((data) => data));

export default fetchSalesData;
