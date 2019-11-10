import product from './product';
import category from './category';
import auth from './auth';
import {combineReducers} from "redux";

export default combineReducers({
  product,
  category,
  auth,
})
