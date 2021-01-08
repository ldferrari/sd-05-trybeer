const URL = 'http://localhost:3001/register';

const fetchUserEmail = (email) => fetch(URL, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email }),
})
  .then((response) => response.json().then((data) => data));

export default fetchUserEmail;
