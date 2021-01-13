const url = 'http://localhost:3001';

export const checkUser = async (email, password) => {
  const myInit = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  };
  const response = await fetch(`${url}/login`, myInit).then((user) => user.json());
  return response || undefined;
};

export const registerUser = async (userData) => {
  const registerReq = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    mode: 'cors',
    body: JSON.stringify(userData),
  };
  const response = await fetch(`${url}/users/register`, registerReq).then((res) => res.json());
  return response || undefined;
};

export const getUserByEmail = async (email, token) => {
  const updateReq = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: token,
    },
    mode: 'cors',
  };
  const response = await fetch(`${url}/users/profile?email=${email}`, updateReq)
    .then((userData) => userData.json());
  return response || undefined;
};

export const updateUserName = async (userData, token) => {
  const updateReq = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: token,
    },
    mode: 'cors',
    body: JSON.stringify(userData),
  };
  const response = await fetch(`${url}/users/update`, updateReq).then((res) => res.json());
  return response || undefined;
};

export const getProducts = async (email, token) => {
  const updateReq = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: token,
    },
    mode: 'cors',
  };
  const response = await fetch(`${url}/products?email=${email}`, updateReq)
    .then((products) => products.json());
  return response || undefined;
};

export const getOrders = (email, token) => {
  const response = [
    {
      "id": 1,
      "total_price": "4.76",
      "sale_date": "2017-11-01T18:00:49.000Z"
    },
    {
      "id": 2,
      "total_price": "4.76",
      "sale_date": "2017-11-01T18:00:49.000Z"
    },
    {
      "id": 3,
      "total_price": "4.76",
      "sale_date": "2017-11-01T18:00:49.000Z"
    },
    {
      "id": 4,
      "total_price": "4.76",
      "sale_date": "2021-01-13T00:30:50.000Z"
    },
    {
      "id": 5,
      "total_price": "4.76",
      "sale_date": "2021-01-13T00:36:56.000Z"
    },
    {
      "id": 6,
      "total_price": "4.76",
      "sale_date": "2021-01-12T21:52:16.000Z"
    }
  ];
  return response;
}
