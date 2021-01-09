const axios = require('axios');

function fetchLogin(email, password) {
  return axios
    .post('http://localhost:3001/login', { email, password })
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

export default fetchLogin;
