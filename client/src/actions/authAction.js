// Register User
import axios from "axios";
import setAuthToken from "../utility/setAuthToken";
import jwt_decode from "jwt-decode";
import {
    GET_LOGIN_ERRORS,
    SET_CURRENT_USER
} from "./types";


// Login - Get User Token

export const loginUser = (userData) => (dispatch) => {
    console.log(userData);
    axios
        .post("/api/admin/login", userData)
        .then((res) => {
            // save to localStorage
            const {
                token
            } = res.data;

            // Set token to local storage
            localStorage.setItem("jwtToken", token);

            // set token to auth header
            setAuthToken(token);

            // decode token to get user data

            const decoded = jwt_decode(token);
            // set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch((error) => {
            dispatch({
                type: GET_LOGIN_ERRORS,
                payload: error.response.data,
            });
        });
};

// set logged in user

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
    };
};

// logout user

export const logOutUser = (decoded) => (dispatch) => {
    //  Remove Token from localstorage
    localStorage.removeItem("jwtToken");
    // remove auth header for future requests
    setAuthToken(false);
    // set current user to {} and isAuthenticated to false
    dispatch(setCurrentUser({}));
};