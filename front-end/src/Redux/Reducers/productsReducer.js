import {
  REQUESTING_PRODUCTS,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_ERROR,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REPOPULATING_STORE,
  DELETE_PRODUCT_FROM_STORE,
} from '../Actions/index';

const INITIAL_STATE = {
  isLoading: true,
  products: [],
  cart: [],
  totalPrice: 0,
};
const zero = 0;
const ordemDeGrandeza = 3;

function productsRequestReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUESTING_PRODUCTS:
      return { ...state, isLoading: true };
    case REQUEST_PRODUCTS_SUCCESS:
      return { ...state, products: action.data, isLoading: false };
    case REQUEST_PRODUCTS_ERROR:
      return {
        ...state,
        products: action.error,
        isLoading: false,
      };
    case INCREASE_QUANTITY: {
      const { product } = action;
      let newCart = [...state.cart, { ...product, quantity: 1 }];
      state.cart.forEach((item, key) => {
        if (item.id === product.id) {
          state.cart[key].quantity += 1;
          newCart = state.cart;
        }
      });
      const newTotalPrice = (state.totalPrice + parseFloat(product.price)).toFixed(ordemDeGrandeza);
      localStorage.setItem('totalPrice', newTotalPrice);
      return {
        ...state,
        cart: newCart,
        totalPrice: Number(
          (state.totalPrice + parseFloat(product.price)).toFixed(ordemDeGrandeza),
        ),
      };
    }
    case DECREASE_QUANTITY: {
      const { product } = action;
      let newCart = state.cart;
      let newTotalPrice = state.totalPrice;
      state.cart.forEach((item, key) => {
        if (item.id === product.id) {
          if (state.cart[key].quantity > zero) {
            state.cart[key].quantity -= 1;
            newTotalPrice = Number(
              (state.totalPrice - parseFloat(product.price)).toFixed(ordemDeGrandeza),
            );
          }
          if (state.cart[key].quantity === zero) {
            newCart = state.cart.filter((prodParam) => prodParam.id !== product.id);
          }
        }
      });
      localStorage.setItem('totalPrice', newTotalPrice);
      return {
        ...state,
        totalPrice: newTotalPrice,
        cart: newCart,
      };
    }
    case REPOPULATING_STORE:
      return {
        ...state,
        cart: action.cart,
      };

    case DELETE_PRODUCT_FROM_STORE:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.productId),
      };
    default:
      return state;
  }
}

export default productsRequestReducer;
