import axios from 'axios';

const config = (token) => ({
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
});

const postGetItems = async (token) => axios.get('http://localhost:3001/products', config(token));

const getProfileInfo = async (token) => axios.get('http://localhost:3001/profile', config(token));

const getSales = async (token) => axios.get('http://localhost:3001/admin/orders', config(token));

const getSaleDetail = async (token, id) => axios.get(`http://localhost:3001/admin/orders/${id}`, config(token));

const postProfileInfo = async (token, name, email) => axios.put('http://localhost:3001/profile', {
  name,
  email,
}, config(token));

const postLogin = async ({ email, password }) => axios
  .post('http://localhost:3001/login', {
    email,
    password,
  })
  .then((e) => e.data);

const postRegister = async ({
  name,
  email,
  password,
  role,
}) => axios.post('http://localhost:3001/register', {
  name,
  email,
  password,
  role,
});

const postOrder = async (token, products, userData) => axios
  .post('http://localhost:3001/checkout', { products, userData }, config(token));

const postGetOrders = async (token) => axios.get('http://localhost:3001/orders', config(token));

const postGetTheOrder = async (token, id) => axios.get(`http://localhost:3001/orders/${id}`, config(token));

const postStatusDelivered = async (token, id) => axios.put('http://localhost:3001/admin/orders', {
  id,
}, config(token));

export {
  getSales,
  postLogin,
  postOrder,
  postRegister,
  postGetItems,
  postGetOrders,
  getProfileInfo,
  postProfileInfo,
  getSaleDetail,
  postGetTheOrder,
  postStatusDelivered,
};
