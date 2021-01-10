import {
  REQUESTING_PRODUCTS,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_ERROR,
  ADD_CART,
  DELETE_CART,
  GET_QUANTITY_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from '../Actions/index';

const INITIAL_STATE = {
  isLoading: false,
  products: [],
  cart: [],
  totalPrice: 0,
};

function productsRequestReducer(state = INITIAL_STATE, action) {
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
    case ADD_CART: {
      let key;
      let { id, name, price, url_image } = action.product;
      let cartItemFound = state.cart.find((item) => item.id === id);
      if (!cartItemFound) {
        let newProduct = { id, name, price, url_image, quantity: 1 };
        return { ...state, cart: [...state, newProduct] }
      } else {
        state.cart.map((item, key_) => {
          if (item.id === id) {
            state.cart[key].quantity++;
            key = key_;
          }
        });
      }
      console.log('Adicionado!');
      return { ...state, totalPrice: state.totalPrice + (price * state.cart[key].quantity), };
    }
    case DELETE_CART: {
      let { id, price, quantity } = state.cart[action.key];
      return {
        ...state,
        totalPrice: state.totalPrice + price * quantity,
        cart: state.cart.filter((item) => item.id !== id),
      }
    }
    case GET_QUANTITY_CART:
      return { ...state, };
    case INCREASE_QUANTITY: {
      let { price, quantity } = action.product;
      return {
        ...state,
        totalPrice: state.totalPrice + price * quantity,
        cart: quantity++,
      }
    }
    case DECREASE_QUANTITY: {
      let { price, quantity } = state.cart[action.key];
      return {
        ...state,
        totalPrice: state.totalPrice + price * quantity,
        cart: quantity--,
      }
    }
    default:
      return state;
  }
}

export default productsRequestReducer;
