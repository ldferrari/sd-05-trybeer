import { getProducts } from "../Services/index";

export const REQUESTING_PRODUCTS = 'REQUESTING_PRODUCTS';
export const REQUEST_PRODUCTS_SUCCESS = 'REQUEST_PRODUCTS_SUCCESS';
export const REQUEST_PRODUCTS_ERROR = 'REQUEST_PRODUCTS_ERROR';


const requestingProducts = () => ({
  type: REQUESTING_PRODUCTS,
});

const requestProductsSuccess = (data) => ({
  type: REQUEST_PRODUCTS_SUCCESS,
  data,
});

const requestProductsError = (error) => ({
  type: REQUEST_PRODUCTS_ERROR,
  error,
});

export function getProductsAct() {
  return (dispatch) => {
    dispatch(requestingProducts());
    
    return getProducts().then(
      (data) => dispatch(requestProductsSuccess(data)),
      (error) => dispatch(requestProductsError(error)),
    );
  };
}

export const ADD_CART = 'ADD_CART';
export const DELETE_CART = 'DELETE_CART';
export const GET_QUANTITY_CART = 'GET_NUMBER_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

export const addToCartAct = (product) => ({
  type: ADD_CART,
  product,
});

export const deleteFromCartAct = (key) => ({
  type: DELETE_CART,
  key,
});

export const getCartQuantityAct = () => ({
  type: GET_QUANTITY_CART,
});

export const increaseQuantityAct = (key) => ({
  type: INCREASE_QUANTITY,
  key,
});

export const decreaseQuantityAct = (key) => ({
  type: DECREASE_QUANTITY,
  key,
});
