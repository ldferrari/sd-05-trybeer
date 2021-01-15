let cart = JSON.parse(localStorage.getItem('cart'));

function addToCart(product) {
  if (!cart) {
    cart = [];
    product.quantity = 1;
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  } else {
    cart.forEach((item) => {
      if (item.id === product.id) {
        item.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        product.quantity = 1;
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    });
  }
}

// https://attacomsian.com/blog/javascript-array-splice
function removeFromCart(product) {
  cart.forEach((item, index) => {
    if (item.id === product.id) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  });
}

// funcao para pegar do local storage os itens pedidos
function getCart() {
  return JSON.parse(localStorage.getItem('cart'));
}

export { addToCart, removeFromCart, getCart };
