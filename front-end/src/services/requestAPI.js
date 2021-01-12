import axios from 'axios';

const config = (token) => ({
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
});

const postGetItems = async (token) => axios.get('http://localhost:3001/products', config(token));

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

export { postLogin, postRegister, postGetItems };