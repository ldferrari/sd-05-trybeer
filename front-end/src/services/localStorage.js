export const getUser = () => JSON.parse(localStorage.getItem('user'));

export const saveProductsMore = (product) => {
  let encontrei = false;
  let list = JSON.parse(localStorage.getItem('cart'));
  if (!list) {
    list = [];
    product.quantity = 1;
    list.push(product);
    localStorage.setItem('cart', JSON.stringify(list));
  } else {
    list.forEach((item) => {
      if (item.id === product.id) {
        item.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(list));
        encontrei = true;
      }
    });
    if (!encontrei) {
      product.quantity = 1;
      list.push(product);
      localStorage.setItem('cart', JSON.stringify(list));
    }
  }
};

export const saveProductsLess = (product) => {
  const list = JSON.parse(localStorage.getItem('cart'));
  list.forEach((item, index) => {
    if (item.id === product.id) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(list));
      } else {
        list.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(list));
      }
    }
  });
};
