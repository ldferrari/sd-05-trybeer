import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getProducts = () => {
  const products = axios
    .get(`${API_URL}/products`, {})
    .then((response) => response.data);
  return products;
};

export const login = (email, password) => {
  const userInfo = axios
    .post(`${API_URL}/users/login`, { email, password } )
    .then((response) => response.data)
    .catch((err) => err);
  return userInfo;
};

export const register = (name, email, password, role) => {
    const newUser = axios
    .post(`${API_URL}/users/register`, { name, email, password, role } )
    .then((response) => response.data)
    .catch((err) => err);
  return newUser;
}

export const updateName = (name, email) => {
    const newName = axios
    .putt(`${API_URL}/users/register`, { name, email } )
    .then((response) => response.data)
    .catch((err) => err);
  return newName;
}