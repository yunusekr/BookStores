export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CURRENT_PRODUCT = "GET_CURRENT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const SAVE_PRODUCT = "SAVE_PRODUCT";

import axios from "axios";

export const getProducts = () => (dispatch) => {
  axios.get("http://localhost:9000/book/products").then((res) => {
    dispatch({ type: GET_PRODUCTS, payload: res.data });
  });
};

export const getCategories = () => (dispatch) => {
  axios.get("http://localhost:9000/book/products/category").then((res) => {
    dispatch({ type: GET_CATEGORIES, payload: res.data });
  });
};

export const getCategoriesProducts = (id) => (dispatch) => {
  axios
    .get("http://localhost:9000/book/products/category/" + id)
    .then((res) => {
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    });
};

export const getCurrentProduct = (id) => (dispatch) => {
  axios.get("http://localhost:9000/book/products/" + id).then((res) => {
    dispatch({ type: GET_CURRENT_PRODUCT, payload: res.data });
  });
};

export const deleteProduct = (id) => (dispatch) => {
  axios
    .delete("http://localhost:9000/book/products/admin/" + id)
    .then((res) => {
      dispatch({ type: DELETE_PRODUCT });
    });
};

export const updateProduct = (id, data) => (dispatch) => {
  axios
    .put("http://localhost:9000/book/products/admin/" + id, data)
    .then((res) => {
      dispatch({ type: UPDATE_PRODUCT });
    });
};

export const saveProduct = (data) => (dispatch) => {
  axios.post("http://localhost:9000/book/products/admin", data).then((res) => {
    dispatch({ type: SAVE_PRODUCT });
  });
};
