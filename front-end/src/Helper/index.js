import getUserData from './getUserData';

const transformPrice = (value) => {
  const decimals = 2;
  const valueWith2Decimals = parseFloat(value).toFixed(decimals);
  const valueWithComma = valueWith2Decimals.toString().replace('.', ',');
  return valueWithComma;
};

const verifyQuantity = (cart, product) => {
  if (cart) {
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) return cartItem.quantity;
  }
  return null;
};

const getLocalStorage = (key) => {
  const local = localStorage.getItem(key);
  if (!local) {
    return [];
  }
  return JSON.parse(local);
};

const zero = 0;

const addingProductToLocalStorage = (product, quantity) => {
  const local = getLocalStorage('cart');
  product = { ...product, quantity };
  let setToLocalStorage = [...local];
  if (local.length === zero) {
    setToLocalStorage = [...local, product];
  }
  local.forEach((item, index) => {
    if (item.id === product.id) {
      setToLocalStorage = [...local];
      setToLocalStorage[index] = product;
    }
  });
  if (!local.some((item) => item.id === product.id)) {
    setToLocalStorage = [...local, product];
  }
  return localStorage.setItem('cart', JSON.stringify(setToLocalStorage));
};

const decreaseProductToLocalStorage = (product, quantity) => {
  const local = getLocalStorage('cart');
  product = { ...product, quantity };
  let setToLocalStorage = [...local];
  if (quantity > zero) {
    local.forEach((item, index) => {
      if (item.id === product.id) {
        setToLocalStorage = [...local];
        setToLocalStorage[index] = product;
      }
    });
  }
  if (quantity === zero) {
    local.forEach((item, index) => {
      if (item.id === product.id) {
        setToLocalStorage = [...local];
        setToLocalStorage.pop(index);
      }
    });
  }
  return localStorage.setItem('cart', JSON.stringify(setToLocalStorage));
};

const deleteProductFromLocalStorage = (productID) => {
  const localCart = getLocalStorage('cart');
  const cartWithoutOneProduct = localCart.filter(
    (product) => productID !== product.id,
  );
  return localStorage.setItem('cart', JSON.stringify(cartWithoutOneProduct));
};

const transformDate = (date) => {
  const dateFormated = new Date(date).toLocaleDateString('pt-br', {
    day: '2-digit',
    month: '2-digit',
  });
  return dateFormated;
};

// Essa função gera chaves aleatórias para as iterações de map
const generateKey = (prefix) => `${prefix}-${Math.random()}`;

const initialAccumulator = 0;
const totalPriceOfProducts = (products) => products.reduce(
  (acc, product) => acc + product.quantity * product.price,
  initialAccumulator,
);

export default {
  getUserData, // Returns user data or null
  generateKey,
  transformPrice,
  verifyQuantity,
  transformDate,
  getLocalStorage,
  addingProductToLocalStorage,
  decreaseProductToLocalStorage,
  deleteProductFromLocalStorage,
  totalPriceOfProducts,
};
