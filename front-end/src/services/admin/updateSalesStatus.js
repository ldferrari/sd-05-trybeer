const updateSalesStatus = async (id, body) => fetch(`http://localhost:3001/admin/orders/${id}`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ status: body }),
})
  .then((response) => response.json().then((data) => data));

export default updateSalesStatus;
