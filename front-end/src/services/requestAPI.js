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

export {
  getSales,
  postLogin,
  postOrder,
  postRegister,
  postGetItems,
  getProfileInfo,
  postProfileInfo,
};
