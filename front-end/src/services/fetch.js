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
    .post(`${API_URL}/users/login`, { email, password })
    .then((response) => response.data)
    .catch((err) => err);
  return userInfo;
};

export const register = (name, email, password, role) => {
  const newUser = axios
    .post(`${API_URL}/users/register`, { name, email, password, role })
    .then((response) => response.data)
    .catch((err) => err);
  return newUser;
};

export const updateName = (name, email) => {
    const newName = axios
    .put(`${API_URL}/users/register`, { name, email } )
    .then((response) => response.data)
    .catch((err) => err);
  return newName;
};

/*
Cadastrar nova venda
Params:

-  email do usuario - String
-  totalPrice -- Number
-  address -- String
-  addressNumber -- Number
-  saleDate -- String
-  products -- Array de objetos -> [{product_id: 1, quantity, 1}, {product_id: 2, quantity: 3}]

*/
export const createNewSale = (email, totalPrice, address, addressNumber, saleDate, products) => {
  const newSale = axios
  .post(`${API_URL}/checkout`, { email, totalPrice, address, addressNumber, saleDate, products } )
  .then((response) => response.data)
  .catch((err) => err);
return newSale;
};

/*
Encerrar pedido / alterar status do pedido de Pendente para Entregue

Params:

- id da venda

*/
export const closeSale = (id) => {
  const closedSale = axios
  .put(`${API_URL}/checkout`, { id } )
  .then((response) => response.data)
  .catch((err) => err);
return closedSale;
};

/*
Buscar todos pedidos do usuário

Params: 

- email do usuario -- String

*/
export const getUserSales = (email) => {
  const userSales = axios
  .get(`${API_URL}/checkout`, { email } )
  .then((response) => response.data)
  .catch((err) => err);
return userSales;
};

/*
Buscar todos pedidos com status "Pendente"
*/
export const getAllSalesOpen = () => {
  const allSalesOpen = axios
  .get(`${API_URL}/checkout/sales-open`, {} )
  .then((response) => response.data)
  .catch((err) => err);
return allSalesOpen;
};

/*
Buscar detalhes de uma venda

Params:

- id da venda

*/
export const getSaleDetails = (id) => {
  const saleDetails = axios
  .get(`${API_URL}/details`, { id } )
  .then((response) => response.data)
  .catch((err) => err);
return saleDetails;
};

/*
Buscar detalhes do produto pelo id

Params:

- id do produto

*/
export const getProductById = (id) => {
  const product = axios
  .get(`${API_URL}/products/id`, { id } )
  .then((response) => response.data)
  .catch((err) => err);
return product;
};
