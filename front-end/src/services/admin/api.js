const API = 'http://localhost:3001/admin/orders';

const salesAPI = async () => fetch(API)
  .then((response) => response.json().then((data) => data));

salesAPI();

export default salesAPI;
