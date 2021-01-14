const transformPrice = (value) => {
  const valueWithComma = value.toString().replace('.', ',');
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

export default { transformPrice, verifyQuantity, getLocalStorage };
