import { combineReducers } from 'redux';
import productsRequestReducer from './productsReducer';
import userRequestReducer from './userReducer';
import salesRequestReducer from './salesReducer';

const rootReducer = combineReducers({
  productsRequestReducer,
  userRequestReducer,
  salesRequestReducer,
});

export default rootReducer;
