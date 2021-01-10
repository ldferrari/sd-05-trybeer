import {
  REQUESTING_PRODUCTS,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_ERROR,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from '../Actions/index';

const INITIAL_STATE = {
  isLoading: false,
  products: [],
  cart: [],
  totalPrice: 0.00,
};

function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUESTING_PRODUCTS:
      return { ...state, isLoading: true };
    case REQUEST_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.data,
        isLoading: false
      };
    case REQUEST_PRODUCTS_ERROR:
      return {
        ...state,
        products: action.error,
        isLoading: false,
      };
    case INCREASE_QUANTITY: {
      let product = action.product;
      let newCart = [...state.cart, { ...product, quantity: 1, }]
      state.cart.map((item, key) => {
        if (item.id === product.id) {
          state.cart[key].quantity++;
          newCart = state.cart;
        }
      })
      return {
        ...state,
        cart: newCart,
        totalPrice: Number((state.totalPrice + parseFloat(product.price)).toFixed(3)),
      }
    }
    case DECREASE_QUANTITY: {
      let product = action.product
      let newCart = state.cart;
      let newTotalPrice = state.totalPrice;
      state.cart.map((item, key) => {
        if (item.id === product.id) {
          if (state.cart[key].quantity > 0) {
            state.cart[key].quantity--
            newTotalPrice = Number((state.totalPrice - parseFloat(product.price)).toFixed(3));
          };
          if (state.cart[key].quantity === 0) newCart = state.cart.filter((item) => item.id !== product.id);
        }
      })
      return {
        ...state,
        totalPrice: newTotalPrice,
        cart: newCart,
      }
    }
    default:
      return state;
  }
}

export default productsReducer;
