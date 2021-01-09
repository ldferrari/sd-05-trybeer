import { getUser } from '../Services/index';

export const REQUESTING_USER = 'REQUESTING_USER';
export const REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS';
export const REQUEST_USER_ERROR = 'REQUEST_USER_ERROR';

const requestingUser = () => ({
  type: REQUESTING_USER,
});

const requestUserSuccess = (data) => ({
  type: REQUEST_USER_SUCCESS,
  data,
});

const requestUserError = (error) => ({
  type: REQUEST_USER_ERROR,
  error,
});

export function getUserDataAct(body) {
  return (dispatch) => {
    dispatch(requestingUser());
    return getUser(body).then(
      (data) => dispatch(requestUserSuccess(data)),
      (error) => dispatch(requestUserError(error)),
    );
  };
}
