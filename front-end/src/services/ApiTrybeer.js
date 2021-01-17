// API axios
const axios = require('axios');

const API_URL = 'http://localhost:3001';

function fetchLogin(email, password) {
  return axios
    .post(`${API_URL}/login`, { email, password })
    .then((res) => res.data)
    .catch((err) => err);
}

// prettier-ignore
function apiRegister(name, email, password, role) {
  return axios
    .post(`${API_URL}/register`, {
      name, email, password, role,
    })
    .then((res) => res.data)
    .catch((err) => err);
}

function getAllProducts(token) {
  return axios
    .get(`${API_URL}/products`, {
      headers: { Authorization: token },
    })
    .then((res) => res.data);
}

function updateUser(name, email, token) {
  return axios
    .put(
      `${API_URL}/users/name`,
      { name, email },
      { headers: { Authorization: token } },
    )
    .then((res) => res.data)
    .catch((err) => err);
}

function placeOrder(email, totalPrice, address, number, saleDate) {
  return axios
    .post(`${API_URL}/checkout`, {
      email,
      totalPrice,
      address,
      number,
      saleDate,
    })
    .then((res) => res.data)
    .catch((err) => err);
}

function fetchOrderId(email) {
  return axios
    .get(`${API_URL}/checkout?email=${email}`)
    .then((res) => res.data)
    .catch((err) => err);
}

export {
  fetchLogin,
  apiRegister,
  updateUser,
  getAllProducts,
  placeOrder,
  fetchOrderId,
};
