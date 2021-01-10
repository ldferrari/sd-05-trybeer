import { combineReducers } from 'redux';
import productsRequestReducer from './productsReducer';
import userRequestReducer from './userReducer';

const rootReducer = combineReducers({
  productsRequestReducer,
  userRequestReducer,
});

export default rootReducer;
