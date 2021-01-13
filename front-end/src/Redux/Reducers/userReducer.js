import {
  REQUESTING_USER,
  REQUEST_USER_SUCCESS,
  REQUEST_USER_ERROR,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from '../Actions/user';

const INITIAL_STATE = {
  isLoading: false,
  userData: {},
  shouldRedirect: false,
};

function userRequestReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUESTING_USER:
      return { ...state, isLoading: true };
    case REQUEST_USER_SUCCESS:
      return {
        ...state,
        userData: action.data,
        shouldRedirect: true,
        isLoading: false,
      };
    case REQUEST_USER_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        userData: { user: action.data },
        shouldRedirect: true,
        isLoading: false,
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        userData: { user: action.data },
        shouldRedirect: true,
        isLoading: false,
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default userRequestReducer;