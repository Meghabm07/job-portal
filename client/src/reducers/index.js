import authReducers from "./authReducers";
import { combineReducers } from 'redux';

export default combineReducers({
    auth: authReducers,
});