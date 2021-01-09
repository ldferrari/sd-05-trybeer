// API axios
// import axios from 'axios';
const axios = require('axios');

export default function fetchLogin(email, password) {
  return axios
    .post('http://localhost:3001/login', { email, password })
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

const apiRegister = (name, email, password, role) =>
  axios
    .post('http://localhost:3001/register', { name, email, password, role })
    .then((res) => res.data)
    .catch((err) => console.error(err));

export { apiRegister };

//   fetch('http://localhost:3001/api/users')
//     .then((result) => result.json())
//     .then((data) => console.log(data[0][0].role));

// const ApiTrybeer = axios
//   .post('http://localhost:3001/login', { email: 'tryber@trybe.com.br', password: '123456' })
//   .then((res) => console.log(res.data));

// const apiLogin = (email, password) =>
//   axios.post('http://localhost:3001/login', { email, password }).then((res) => res.data);
