import getUserData from './getUserData';
import {
  registerData,
  getDataByKey,
} from './localStorageHandle';

const CART = 'cart';
const MIN = 0;

const transformPrice = (value) => {
  const decimals = 2;
  const valueWith2Decimals = parseFloat(value).toFixed(decimals);
  const valueWithComma = valueWith2Decimals.toString().replace('.', ',');
  return valueWithComma;
};

const getCartInfo = () => {
  const currentCart = getDataByKey(CART);
  if (!currentCart) return {};
  return Object.keys(currentCart).reduce((info, id) => {
    const { quantity, price, name } = currentCart[id];
    if (quantity === 0) return info;
    const itemArray = [ ...info.itemArray, { id, price, quantity, name } ];
    const total = info.total += Number(quantity) * Number(price);
    return {
      total,
      itemArray,
    };
  }, { total: 0, itemArray: [] });
};

const getProductFromCartById = (productId) => {
  const currentCart = getDataByKey(CART)?.[productId];
  return currentCart || {};
};

const setProductToCart = (product, amount) => {
  const currentCart = getDataByKey(CART);
  const item = {
    ...product,
    quantity: Math.max((currentCart[product.id]?.quantity || 0) + amount, 0),
  };
  const cart = { ...currentCart, [product.id]: item };
  registerData({ cart });
  return item.quantity;
};

const deleteProductById = (productID) => {
  const currentCart = getDataByKey(CART);
  const { [productID]: product, ...cart } = currentCart;
  registerData({ cart });
  return cart;
};

const transformDate = (date) => new Date(date)
  .toLocaleDateString('pt-br', {
    day: '2-digit',
    month: '2-digit',
  });

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
  setProductToCart,
  deleteProductById,
  transformDate,
  totalPriceOfProducts,
  getProductFromCartById,
  getCartInfo,
};
