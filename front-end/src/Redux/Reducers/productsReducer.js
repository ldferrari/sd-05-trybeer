import {
  REQUESTING_PRODUCTS,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_ERROR,
} from '../Actions/index';

const INITIAL_STATE = {
  isLoading: false,
  products: []
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
    default:
      return state;
  }
}

export default productsRequestReducer;
