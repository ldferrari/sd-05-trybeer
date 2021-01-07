const API_URL = 'http://localhost:3001'

const fetchAPI = (url, data = {}) =>
  fetch(url, data)
    .then((response) =>
      response
        .json()
        .then((data) => data)
        .catch((err) => {
          console.error(err);
          return {};
        })
    )
    .catch((err) => {
      console.error(err);
      return {};
    });

export const isConnected = () => fetchAPI(API_URL);

export const login = async ({
    email, /* Email - [string] */
    password, /* Email - [string] */
}) => await fetchAPI(`${API_URL}/users/login`, { email, password });

