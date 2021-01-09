import {
  REQUESTING_PRODUCTS,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_ERROR,
  ADDING_TO_CART,
} from '../Actions/index';

const INITIAL_STATE = {
  isLoading: false,
  products: [],
  cart: [],
};

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
    case ADDING_TO_CART:
      console.log('Produto adicionado no carrinho!');
      return { ...state, cart: [...state.cart, action.newProduct] };
    default:
      return state;
  }
}

export default productsRequestReducer;
