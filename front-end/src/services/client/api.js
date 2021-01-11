const APIurl = 'http://localhost:3001/products';

const productsApi = async () => {
  return fetch(APIurl).then((products) =>
    products.json().then((data) => data)
  );
};

productsApi();

export default productsApi;
