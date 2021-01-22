const getSaleById = async (id) => fetch(`http://localhost:3001/admin/orders/${id}`)
  .then((response) => response.json().then((data) => data));

export default getSaleById;
