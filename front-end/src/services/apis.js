const updateUser = (id, name) => fetch(`http://localhost:3001/profile/${id}`,
{
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(name),
})
  .then((response) => response.json().then((data) => data));

export default updateUser;
