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
