const updateUser = (id) => fetch(`http://localhost:3001/profile/${id}`)
  .then((response) => response.json().then((data) => data));

export default updateUser;
