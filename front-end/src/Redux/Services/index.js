const localhostURL = 'http://localhost:3001';

const myInit = {
  mode: 'cors',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getProducts = () =>
  fetch(`${localhostURL}/products`, myInit).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json),
      ),
  );

export const getUser = () => (
  // Simula a requisição
  new Promise((resolve, _reject) => {
      resolve({ name: "Teste", email: "teste@teste.com" });
    }
  )
);
