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
  cartQuantity: 0,
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
    case ADD_CART:
      let { id, name, price, url_image } = action.product;
      if (state.cartQuantity == 0) {
        let newProduct = { id, name, price, url_image, quantity: 1 };
        state.cart.push(newProduct);
      } else {
        state.cart.map((item, index) => item.id == id ? state.cart[index].quantity++ : null);
      }
      return { ...state, cartQuantity: state.cartQuantity++, }
    case DELETE_CART:
      let product = state.cart[action.key]
      return {
        ...state,
        cartQuantity: state.cartQuantity - product.quantity,
        cart: state.cart.filter((item) => item.id != product.id),
      }
    case GET_QUANTITY_CART:
      return { ...state, };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartQuantity: state.cartQuantity++,
        cart: state.cart[action.key].quantity++,
      }
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartQuantity: state.cartQuantity--,
        cart: state.cart[action.key].quantity--,
      }
    default:
      return state;
  }
}

export default productsRequestReducer;
