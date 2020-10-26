import { applyMiddleware, compose, createStore } from "redux";

import rootReducers from "./reducers/index.js";
import thunk from "redux-thunk";

const initialState = {};

const store = createStore(
    rootReducers,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;