// API axios
const axios = require('axios');

function fetchLogin(email, password) {
  return axios
    .post('http://localhost:3001/login', { email, password })
    .then((res) => res.data)
    .catch((err) => err);
}

// prettier-ignore
const apiRegister = (name, email, password, role) => axios
  .post('http://localhost:3001/register', {
    name, email, password, role,
  })
  .then((res) => res.data)
  .catch((err) => err);

const getAllProducts = (token) => axios
  .get('http://localhost:3001/products', {
    headers: { Authorization: token },
  })
  .then((res) => res.data);

function updateUser(name, email, token) {
  return axios
    .put(
      'http://localhost:3001/users/name',
      { name, email },
      { headers: { Authorization: token } },
    )
    .then((res) => res.data)
    .catch((err) => err);
}

export {
  fetchLogin, apiRegister, updateUser, getAllProducts,
};
