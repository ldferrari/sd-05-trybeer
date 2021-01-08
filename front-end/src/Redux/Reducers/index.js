import { combineReducers } from 'redux';
import productsRequestReducer from "./productsReducer";

const rootReducer = combineReducers({
  productsRequestReducer,
});

export default rootReducer;
