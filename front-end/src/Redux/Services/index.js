import { getDataByKey } from '../../Services/localStorage';

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
  mode: "cors",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const myInitWithBody = (data, token) => ({
  mode: 'cors',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token || '',
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

export const getClientOrder = (id) =>
  fetch(`${localhostURL}/sales/${id}`, myInitWithBody).then((response) =>
    response
      .json()
      .then((json) => Promise.resolve(json))
      .catch((err) => Promise.reject(err))
  );

export const getSalesOrder = () =>
    fetch(`${localhostURL}/orders`, myInitWithBody).then((response) =>
      response
      .json()
      .then((json) => Promise.resolve(json))
      .catch((err) => Promise.reject(err)))

// prettier-ignore
export const getUser = (data) => (
  fetch(`${localhostURL}/`, myInitWithBody(data)).then((response) => (
    response
      .json()
      .then((json) => Promise.resolve(json))
      .catch((err) => Promise.reject(err))))
);

// prettier-ignore
export const updateUser = (data) => {
  const token = getDataByKey('token');
  return fetch(`${localhostURL}/update`, myInitWithBody(data, token)).then(
    (response) => response
      .json()
      .then((json) => Promise.resolve(json))
      .catch((err) => Promise.reject(err)),
  );
};

export const submitOrderFetch = (data) => (
  fetch(`${localhostURL}/sales`, myInitWithBody(data)).then((response) => (
    response
      .json()
      .then((json) => Promise.resolve(json))
      .catch((err) => Promise.reject(err))))
);
// prettier-ignore
export const registerUser = (data) => (
  fetch(`${localhostURL}/register`, myInitWithBody(data)).then(
    (response) => response
      .json()
      .then((json) => {
        if (json.message) {
          return Promise.reject(json.message);
        }
        return Promise.resolve(json);
      })
      .catch((err) => Promise.reject(err)),
  )
);

const initialAccumulator = 0;
export const totalPriceOfProducts = (products) => products.reduce(
  (acc, product) => acc + product.quantity * product.price,
  initialAccumulator,
);
