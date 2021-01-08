const localhostURL = 'http://localhost:3001/products';

const myInit = {
  mode: 'cors',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};
export const getProducts = () =>
  fetch(`${localhostURL}`, myInit).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json),
      ),
  );
