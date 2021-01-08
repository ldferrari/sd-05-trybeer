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
