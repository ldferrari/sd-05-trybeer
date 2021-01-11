// API axios
const axios = require('axios');

export default function fetchLogin(email, password) {
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
  .then((res) => res)
  .catch((err) => err);

function updateUser(name) {
  return axios
    .put('http://localhost:3001/users/name', { name })
    .then((res) => res.data)
    .catch((err) => err);
}

export { apiRegister, updateUser };
