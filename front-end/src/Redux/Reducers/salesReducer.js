import {
  REQUESTING_SALES,
  REQUEST_USER_SALES_SUCCESS,
  REQUEST_USER_SALES_ERROR,
} from '../Actions/sales';

const INITIAL_STATE = {
  isLoading: false,
  sales: [],
};

function salesRequestReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUESTING_SALES:
      return { ...state, isLoading: true };
    case REQUEST_USER_SALES_SUCCESS:
      return { ...state, sales: action.data, isLoading: false };
    case REQUEST_USER_SALES_ERROR:
      return {
        ...state,
        sales: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default salesRequestReducer;
