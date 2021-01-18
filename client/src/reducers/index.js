import authReducers from "./authReducers";
import categoryReducers from './categoryReducers'
import { combineReducers } from 'redux';

export default combineReducers({
    auth: authReducers,
    category: categoryReducers,

});