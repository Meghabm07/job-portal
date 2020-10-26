import {
    GET_LOGIN_ERRORS,
    SET_CURRENT_USER
} from "../actions/types";

const initialState = {
    isAuthenticated: false,
    user: {},
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: Object.keys(payload).length !== 0 ? true : false,
                user: payload.user,
            };

        case GET_LOGIN_ERRORS:
            return {
                ...state,
                error: payload,
            };
        default:
            return state;
    }
}