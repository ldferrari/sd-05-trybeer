import { getProducts, submitOrderFetch } from '../Services/index';

export const REQUESTING_PRODUCTS = 'REQUESTING_PRODUCTS';
export const REQUEST_PRODUCTS_SUCCESS = 'REQUEST_PRODUCTS_SUCCESS';
export const REQUEST_PRODUCTS_ERROR = 'REQUEST_PRODUCTS_ERROR';
export const SUBMIT_ORDER_SUCCESS = 'SUBMIT_ORDER_SUCCESS';
export const SUBMIT_ORDER_ERROR = 'SUBMIT_ORDER_ERROR';
export const DELETE_PRODUCT_FROM_STORE = 'DELETE_PRODUCT_FROM_STORE';


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

export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

export const increaseQuantityAct = (product) => ({
  type: INCREASE_QUANTITY,
  product,
});

export const decreaseQuantityAct = (product) => ({
  type: DECREASE_QUANTITY,
  product,
});

export const REPOPULATING_STORE = 'REPOPULATING_STORE';

export const repopulatingAct = (cart) => ({
  type: REPOPULATING_STORE,
  cart,
});

const submitOrderSuccess = (data) => ({
  type: SUBMIT_ORDER_SUCCESS,
  data,
});

const submitOrderError = (error) => ({
  type: SUBMIT_ORDER_ERROR,
  error,
});

export const submitOrderAct = (body) => (dispatch) => {
  dispatch(requestingProducts());

  return submitOrderFetch(body).then(
    (data) => dispatch(submitOrderSuccess(data)),
    (error) => dispatch(submitOrderError(error)),
  );
};

export const deleteProductFromStore = (productId) => ({
  type: DELETE_PRODUCT_FROM_STORE,
  productId,
});

