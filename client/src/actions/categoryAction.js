import {
    CATEGORY_ERROR,
    CATEGORY_SUCCESS,
    EDIT_CATEGORY,
    GET_CATEGORY_LIST
} from "./types";

import axios from "axios";

// Get Category List
export const getCategoryList = (defaultTableSetting) => (dispatch) => {
    const url = "/api/admin/category/list";

    axios
        .post(url, defaultTableSetting)
        .then(response => {
            dispatch({
                type: GET_CATEGORY_LIST,
                payload: response.data,
            });
        })
        .catch(error => {
            console.log(error.response.data);
        });
};

// Add Category
export const addCategory = (formData) => (dispatch) => {
    const url = "/api/admin/category";

    axios
        .post(url, formData)
        .then(response => {
            dispatch({
                type: CATEGORY_SUCCESS,
                payload: response.data.message,
            });
        })
        .catch(error => {
            dispatch({
                type: CATEGORY_ERROR,
                payload: error.response.data.error,
            });
        });
};

// Edit Category
export const editCategory = (categoryId) => (dispatch) => {
    const url = "/api/admin/category/" + categoryId;

    axios
        .get(url)
        .then(response => {
            dispatch({
                type: EDIT_CATEGORY,
                payload: response.data,
            });
        })
        .catch(error => {
            console.log(error.response.data);
        });
};

// Update Category
export const updateCategory = (formData, categoryId) => (dispatch) => {
    const url = "/api/admin/category/" + categoryId;


    axios
        .put(url, formData)
        .then(response => {
            dispatch({
                type: CATEGORY_SUCCESS,
                payload: response.data.message,
            });
        })
        .catch(error => {
            dispatch({
                type: CATEGORY_ERROR,
                payload: error.response.data.error,
            });
        });
};

// Delete Category
export const deleteCategory = (categoryId) => (dispatch) => {
    const url = "/api/admin/category/" + categoryId;
    axios
        .delete(url)
        .then((response) => {
            dispatch({
                type: CATEGORY_SUCCESS,
                payload: response.data.message,
            });
        })
        .catch((error) => {
            if (error.response.status) {
                if (error.response.status === 400) {
                    dispatch({
                        type: CATEGORY_ERROR,
                        payload: error.response.data.errors,
                    });
                }
            }
        });
};