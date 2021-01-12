const localhostURL = 'http://localhost:3001';

// NÃO USAR ESTA SINTAXE *lint:

// export const getProducts = () =>
//   fetch(`${localhostURL}/products`, myInit).then((response) =>
//     response
//       .json()
//       .then((json) =>
//         response.ok ? Promise.resolve(json) : Promise.reject(json),
//       ),
//   );

const myInit = {
  mode: 'cors',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const myInitWithBody = (data) => ({
  mode: 'cors',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

// Use esta aqui ou outra que não envolva retorno do retorno do ternário:

// prettier-ignore
export const getProducts = () => (
  fetch(`${localhostURL}/products`, myInit).then((response) => (
    response
      .json()
      .then((json) => Promise.resolve(json))
      .catch((err) => Promise.reject(err))
  ))
);

// prettier-ignore
export const getUser = (data) => (
  fetch(`${localhostURL}/`, myInitWithBody(data)).then((response) => (
    response
      .json()
      .then((json) => Promise.resolve(json))
      .catch((err) => Promise.reject(err))))
);

// Achar saída adequada para os 'catchs', no lugar de console.error.

export const updateUser = (data) =>
  fetch(`${localhostURL}/update`, myInitWithBody(data)).then((response) =>
    response
      .json()
      .then((json) => Promise.resolve(json))
      .catch((err) => Promise.reject(err)),
  );

export const registerUser = (data) => {
  fetch(`${localhostURL}/register`, myInitWithBody(data)).then((response) =>
    response
      .json()
      .then((json) => Promise.resolve(json))
      .catch((err) => Promise.reject(err)),
  );
};
