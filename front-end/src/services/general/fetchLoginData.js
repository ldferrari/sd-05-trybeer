const URL = 'http://localhost:3001/login';

const fetchUserData = (userData) => fetch(URL, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userData),
})
  .then((response) => response.json().then((data) => data));

export default fetchUserData;
