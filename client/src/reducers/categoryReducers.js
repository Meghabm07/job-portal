import {
    CATEGORY_ERROR,
    CATEGORY_SUCCESS,
    EDIT_CATEGORY,
    GET_CATEGORY_LIST
} from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {

    switch (action.type) {
        case GET_CATEGORY_LIST:
            return {
                ...state,
                categoryData: action.payload,
            };

        case CATEGORY_SUCCESS:
            return {
                ...state,
                message: action.payload,
            };

        case CATEGORY_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        case EDIT_CATEGORY:
            return {
                ...state,
                editData: action.payload,
            };

        default:
            return state;
    }
}